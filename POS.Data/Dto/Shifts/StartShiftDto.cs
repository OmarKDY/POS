using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POS.Data.Dto.Shifts
{
    public class StartShiftDto
    {
        public string ShiftName { get; set; }
        public Guid UserId { get; set; }
    }
}
