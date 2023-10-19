using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [StringLength(50)]
        public string? Username { get; set; }

        [StringLength(100)]
        public string? Password { get; set; }

        [StringLength(100)]
        public string? Email { get; set; }

    }
}
