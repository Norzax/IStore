using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }

        [StringLength(100)]
        public string? ProjectName { get; set; }

        [StringLength(200)]
        public string? ProjectDescription { get; set; }

        [StringLength(10)]
        public string? CreatedAt { get; set; }

        [StringLength(10)]
        public string? UpdateAt { get; set; }
    }
}
