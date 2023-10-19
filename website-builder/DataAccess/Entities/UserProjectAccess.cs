using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class UserProjectAccess
    {
        [Key]
        public int UserProjectAccessID { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }
        public User User { get; set; }

        [ForeignKey("Project")]
        public int ProjectID { get; set; }
        public Project Project { get; set; }

        [ForeignKey("AccessLevel")]
        public int AccessLevelID { get; set; }
        public AccessLevel AccessLevel { get; set; }
    }
}
