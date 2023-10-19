using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class AccessLevel
    {
        [Key]
        public int AccessLevelID { get; set; }

        [StringLength(50)]
        public string? Description { get; set; }
    }
}
