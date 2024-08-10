using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POS.Data.Entities.Shifts
{
    public class Shifts
    {
        [Key]
        public int ShiftId { get; set; }
        public string ShiftName { get; set; }
        public DateTime StartShift { get; set; }
        public DateTime? EndShift { get; set; }
        public TimeSpan? ShiftDuration { get; set; }
        [ForeignKey("UserId")]
        public Guid UserId { get; set; }
        public User User { get; set; }

    }
}
