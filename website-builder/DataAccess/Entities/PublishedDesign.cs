using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class PublishedDesign
    {
        [Key]
        public int PublishedDesignID { get; set; }

        public DateTime PublishDate { get; set; }

        [StringLength(100)]
        public string? PublishedBy { get; set; }
    }
}
