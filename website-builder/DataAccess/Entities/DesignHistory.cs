using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class DesignHistory
    {
        [Key]
        public int DesignHistoryID { get; set; }

        [ForeignKey("Design")]
        public int DesignID { get; set; }

        public int Version { get; set; }

        [StringLength(10)]
        public string? ModifiedAt { get; set; }

        [StringLength(100)]
        public string? ModifiedBy { get; set; }
    }
}
