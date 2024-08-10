using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using POS.API.Helpers;
using POS.Data.Dto;
using POS.Data.Dto.Shifts;
using POS.Data.Entities.Shifts;
using POS.Data.Resources;
using POS.Domain;
using POS.MediatR.CommandAndQuery;
using POS.MediatR.Commands;
using POS.MediatR.SalesOrder.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace POS.API.Controllers.SalesOrder
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SalesOrderController : BaseController
    {
        public IMediator _mediator { get; set; }
        private POSDbContext _context { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="SalesOrderController"/> class.
        /// </summary>
        /// <param name="mediator">The mediator.</param>
        public SalesOrderController(IMediator mediator, POSDbContext context)
        {
            _mediator = mediator;
            _context = context;
        }

        #region new business
        // Search - Next - Previous Order Number
        [HttpGet("previous/{orderNumber}")]
        public async Task<IActionResult> GetPreviousSalesOrder(string orderNumber)
        {
            Data.SalesOrder previousSalesOrder;

            if (orderNumber == "undefined")
            {
                previousSalesOrder = await _context.SalesOrders
                    .Include(so => so.SalesOrderItems)
                        .ThenInclude(soi => soi.Product) // Include the related Product entity
                    .OrderByDescending(so => so.SOCreatedDate)
                    .FirstOrDefaultAsync();
            }
            else
            {
                var numericPart = GetNumericPart(orderNumber);
                var allSalesOrders = await _context.SalesOrders
                    .Include(so => so.SalesOrderItems)
                        .ThenInclude(soi => soi.Product) // Include the related Product entity
                    .ToListAsync();

                previousSalesOrder = allSalesOrders
                    .Where(so => GetNumericPart(so.OrderNumber) < numericPart)
                    .OrderByDescending(so => GetNumericPart(so.OrderNumber))
                    .FirstOrDefault();
            }

            if (previousSalesOrder == null)
            {
                return NoContent();
            }

            previousSalesOrder.SalesOrderItems = previousSalesOrder.SalesOrderItems
                .Where(soi => soi.Status == 0)
                .ToList();

            return Ok(previousSalesOrder);
        }


        [HttpGet("next/{orderNumber}")]
        public async Task<IActionResult> GetNextSalesOrder(string orderNumber)
        {
            Data.SalesOrder nextSalesOrder;

            var numericPart = GetNumericPart(orderNumber);
            var allSalesOrders = await _context.SalesOrders
                .Include(so => so.SalesOrderItems)
                    .ThenInclude(soi => soi.Product) // Include the related Product entity
                .ToListAsync();

            nextSalesOrder = allSalesOrders
                .Where(so => GetNumericPart(so.OrderNumber) > numericPart)
                .OrderBy(so => GetNumericPart(so.OrderNumber))
                .FirstOrDefault();

            if (nextSalesOrder == null)
            {
                return NoContent();
            }

            nextSalesOrder.SalesOrderItems = nextSalesOrder.SalesOrderItems
                .Where(soi => soi.Status == 0)
                .ToList();

            return Ok(nextSalesOrder);
        }


        private int GetNumericPart(string orderNumber)
        {
            return int.Parse(orderNumber.Substring(3));
        }

        [HttpGet("byOrderNumber/{orderNumber}")]
        public async Task<IActionResult> GetSalesOrderByOrderNumber(string orderNumber)
        {
            var salesOrder = await _context.SalesOrders
                .Include(so => so.SalesOrderItems)
                    .ThenInclude(soi => soi.Product) // Include the related Product entity
                .FirstOrDefaultAsync(so => so.OrderNumber.Equals(orderNumber));

            if (salesOrder == null)
            {
                return NotFound();
            }

            // Filter the SalesOrderItems to include only those with status 0
            salesOrder.SalesOrderItems = salesOrder.SalesOrderItems
                .Where(soi => soi.Status == 0)
                .ToList();

            return Ok(salesOrder);
        }

        [HttpPost("GetTaxIdsForProducts")]
        public async Task<IActionResult> GetTaxIdsForProducts([FromBody] dynamic request)
        {
            List<Guid> productIds = request.productIds.ToObject<List<Guid>>();
            Guid id = request.id;

            var salesOrderItems = await _context.SalesOrderItems
                .Where(s => s.SalesOrderId == id && productIds.Contains(s.ProductId))
                .ToListAsync();

            var salesOrderItemIds = salesOrderItems.Select(it => it.Id).ToList();

            var salesOrderItemTaxes = await _context.SalesOrderItemTaxes
                .Where(t => salesOrderItemIds.Contains(t.SalesOrderItemId))
                .Select(t => new
                {
                    t.Id,
                    t.SalesOrderItemId,
                    t.TaxId,
                    TaxName = t.Tax.Name,
                    TaxPercentage = t.Tax.Percentage
                })
                .ToListAsync();

            return Ok(salesOrderItemTaxes);
        }

        //Shifts
        // Endpoint to start a shift
        [Authorize]
        [HttpPost("StartShift")]
        public async Task<IActionResult> StartShift()
        {
            var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userIdString == null)
            {
                return Unauthorized("User ID not found in claims");
            }

            if (!Guid.TryParse(userIdString, out var userId))
            {
                return BadRequest("Invalid User ID format");
            }

            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return NotFound("User not found");
            }

            // Check if there is an ongoing shift for the user
            var ongoingShift = await _context.Shifts
                .Where(s => s.UserId == userId && !s.EndShift.HasValue)
                .FirstOrDefaultAsync();

            if (ongoingShift != null)
            {
                return BadRequest("Cannot start a new shift. An ongoing shift exists.");
            }

            // Create a new shift
            var shift = new Shifts
            {
                ShiftName = user.UserName + " Shift",
                StartShift = DateTime.UtcNow,
                UserId = userId
            };

            _context.Shifts.Add(shift);
            await _context.SaveChangesAsync();

            return Ok(shift);
        }

        // Endpoint to end a shift
        [Authorize]
        [HttpPost("EndShift")]
        public async Task<IActionResult> EndShift()
        {
            var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userIdString == null)
            {
                return Unauthorized("User ID not found in claims");
            }

            if (!Guid.TryParse(userIdString, out var userId))
            {
                return BadRequest("Invalid User ID format");
            }

            var shift = await _context.Shifts
                .Where(s => s.UserId == userId && !s.EndShift.HasValue)
                .OrderByDescending(s => s.StartShift)
                .FirstOrDefaultAsync();

            if (shift == null)
            {
                return NotFound("No ongoing shift found for the user");
            }

            shift.EndShift = DateTime.UtcNow;
            shift.ShiftDuration = shift.EndShift.Value - shift.StartShift;

            _context.Shifts.Update(shift);
            await _context.SaveChangesAsync();

            return Ok(shift);
        }

        #endregion

        /// <summary>
        /// Gets all sales order.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ClaimCheck("SO_VIEW_SALES_ORDERS,REP_SO_REP")]
        [Produces("application/json", "application/xml", Type = typeof(List<SalesOrderDto>))]
        public async Task<IActionResult> GetAllSalesOrder([FromQuery] SalesOrderResource salesOrderResource)
        {
            var getAllSalesOrderQuery = new GetAllSalesOrderCommand
            {
                SalesOrderResource = salesOrderResource
            };
            var salesOrders = await _mediator.Send(getAllSalesOrderQuery);

            var paginationMetadata = new
            {
                totalCount = salesOrders.TotalCount,
                pageSize = salesOrders.PageSize,
                skip = salesOrders.Skip,
                totalPages = salesOrders.TotalPages
            };

            Response.Headers.Add("X-Pagination",
                Newtonsoft.Json.JsonConvert.SerializeObject(paginationMetadata));

            return Ok(salesOrders);
        }

        /// <summary>
        /// Get Sales Order.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ClaimCheck("SO_VIEW_SO_DETAIL")]
        [Produces("application/json", "application/xml", Type = typeof(List<SalesOrderDto>))]
        public async Task<IActionResult> GetSalesOrder(Guid id)
        {
            var getSalesOrderQuery = new GetSalesOrderCommand
            {
                Id = id
            };
            var salesOrder = await _mediator.Send(getSalesOrderQuery);
            return ReturnFormattedResponse(salesOrder);
        }


        /// <summary>
        /// Creates the sales order.
        /// </summary>
        /// <param name="addSalesOrderCommand">The add sales order command.</param>
        /// <returns></returns>
        [HttpPost, DisableRequestSizeLimit]
        [ClaimCheck("SO_ADD_SO,POS_POS")]
        [Produces("application/json", "application/xml", Type = typeof(SalesOrderDto))]
        public async Task<IActionResult> CreateSalesOrder(AddSalesOrderCommand addSalesOrderCommand)
        {
            var result = await _mediator.Send(addSalesOrderCommand);
            return ReturnFormattedResponse(result);
        }

        /// <summary>
        /// Update the Sales order.
        /// </summary>
        /// <param name="updateSalesOrderCommand">The add Sales order command.</param>
        /// <returns></returns>
        [HttpPut("{id}")]
        [ClaimCheck("SO_UPDATE_SO")]
        [Produces("application/json", "application/xml", Type = typeof(SalesOrderDto))]
        public async Task<IActionResult> UpdateSalesOrder(Guid id, UpdateSalesOrderCommand updateSalesOrderCommand)
        {
            var result = await _mediator.Send(updateSalesOrderCommand);
            return ReturnFormattedResponse(result);
        }

        /// <summary>
        /// Update the Sales order return.
        /// </summary>
        /// <param name="UpdateSalesOrderReturnCommand">The add Sales order command.</param>
        /// <returns></returns>
        [HttpPut("{id}/return")]
        [ClaimCheck("SO_RETURN_SO")]
        [Produces("application/json", "application/xml")]
        public async Task<IActionResult> UpdateSalesOrderReturn(Guid id, UpdateSalesOrderReturnCommand updateSalesOrderReturnCommand)
        {
            var result = await _mediator.Send(updateSalesOrderReturnCommand);
            return ReturnFormattedResponse(result);
        }


        /// <summary>
        /// Delete Sales Order
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [ClaimCheck("SO_DELETE_SO")]
        public async Task<IActionResult> DeleteSalesOrder(Guid id)
        {
            var deleteSalesOrderCommand = new DeleteSalesOrderCommand
            {
                Id = id
            };
            var response = await _mediator.Send(deleteSalesOrderCommand);
            return Ok(response);
        }

        /// <summary>
        /// Gets the new Sales order number.
        /// </summary>
        /// <returns></returns>
        [HttpGet("newOrderNumber")]
        public async Task<IActionResult> GetNewSalesOrderNumber()
        {
            var getNewSalesOrderNumberQuery = new GetNewSalesOrderNumberCommand { };
            var response = await _mediator.Send(getNewSalesOrderNumberQuery);
            return Ok(new
            {
                OrderNumber = response
            });
        }

        /// <summary>
        /// Get Sales order Items
        /// </summary>
        /// <param name="id"></param>
        /// <param name="isReturn"></param>
        /// <returns></returns>
        [HttpGet("{id}/items")]
        [ClaimCheck("SO_VIEW_SALES_ORDERS")]
        [Produces("application/json", "application/xml", Type = typeof(List<SalesOrderItemTaxDto>))]
        public async Task<IActionResult> GetSalesOrderItems(Guid id, bool isReturn = false)
        {
            var getSalesOrderQuery = new GetSalesOrderItemsCommand { Id = id, IsReturn = isReturn };
            var salesOrderItems = await _mediator.Send(getSalesOrderQuery);
            return Ok(salesOrderItems);
        }

        /// <summary>
        /// Get Sales Item report.
        /// </summary>
        /// <param name="salesOrderResource"></param>
        /// <returns></returns>
        [HttpGet("items/reports")]
        [ClaimCheck("SO_VIEW_SALES_ORDERS")]
        public async Task<IActionResult> GetSalesOrderItems([FromQuery] SalesOrderResource salesOrderResource)
        {
            var getSalesOrderItemsReportCommand = new GetSalesOrderItemsReportCommand { SalesOrderResource = salesOrderResource };
            var response = await _mediator.Send(getSalesOrderItemsReportCommand);

            var paginationMetadata = new
            {
                totalCount = response.TotalCount,
                pageSize = response.PageSize,
                skip = response.Skip,
                totalPages = response.TotalPages
            };

            Response.Headers.Add("X-Pagination",
                Newtonsoft.Json.JsonConvert.SerializeObject(paginationMetadata));

            return Ok(response);

        }

        /// <summary>
        /// Get Recent Shipment.
        /// </summary>
        /// <returns></returns>
        [HttpGet("recentshipment")]
        [ClaimCheck("DB_RECENT_SO_SHIPMENT")]
        public async Task<IActionResult> GetRecentExpectedShipmentDateSalesOrder()
        {
            var getSalesOrderRecentShipmentDateQuery = new GetSalesOrderRecentShipmentDateQuery { };
            var serviceResponse = await _mediator.Send(getSalesOrderRecentShipmentDateQuery);
            return Ok(serviceResponse);
        }

        /// <summary>
        /// Get Sales order profit and loss Report.
        /// </summary>
        /// <param name="salesOrderResource"></param>
        /// <returns></returns>
        [HttpGet("items/profitLoss")]
        public async Task<IActionResult> GetSalesOrderProfitLossReport([FromQuery] SalesOrderResource salesOrderResource)
        {
            var getSaleOrderProfitLossCommand = new GetSaleOrderProfitLossCommand
            {
                FromDate = salesOrderResource.FromDate.Value,
                ToDate = salesOrderResource.ToDate.Value,
            };

            var response = await _mediator.Send(getSaleOrderProfitLossCommand);
            return Ok(response);
        }
    }
}

