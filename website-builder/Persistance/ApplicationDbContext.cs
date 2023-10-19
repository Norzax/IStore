using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>().HasData(
            new Project { ProjectId = 1, ProjectName = "Project 1", ProjectDescription = "Description 1", CreatedAt = "2023-10-17", UpdateAt = "2023-10-18" },
            new Project { ProjectId = 2, ProjectName = "Project 2", ProjectDescription = "Description 2", CreatedAt = "2023-10-18", UpdateAt = "2023-10-19" }
            );

            modelBuilder.Entity<AccessLevel>().HasData(
                new AccessLevel { AccessLevelID = 1, Description = "AllControll" },
                new AccessLevel { AccessLevelID = 2, Description = "Review" },
                new AccessLevel { AccessLevelID = 3, Description = "Changable" }
            );

            modelBuilder.Entity<UserProjectAccess>().HasData(
            new UserProjectAccess { UserProjectAccessID = 1, UserID = 1, ProjectID = 1, AccessLevelID = 1 },
            new UserProjectAccess { UserProjectAccessID = 2, UserID = 2, ProjectID = 2, AccessLevelID = 2 }
            );

            modelBuilder.Entity<User>().HasData(
                new User { UserID = 1, Username = "user1", Password = "password1", Email = "user1@example.com" },
                new User { UserID = 2, Username = "user2", Password = "password2", Email = "user2@example.com" }
            );
             
            modelBuilder.Entity<PublishedDesign>().HasData(
                new PublishedDesign { PublishedDesignID = 1, PublishDate = DateTime.Parse("2023-10-17"), PublishedBy = "Admin1" },
                new PublishedDesign { PublishedDesignID = 2, PublishDate = DateTime.Parse("2023-10-18"), PublishedBy = "Admin2" }
            );

            modelBuilder.Entity<DesignHistory>().HasData(
                new DesignHistory { DesignHistoryID = 1, DesignID = 1, Version = 1, ModifiedAt = "2023-10-17", ModifiedBy = "User1" },
                new DesignHistory { DesignHistoryID = 2, DesignID = 2, Version = 1, ModifiedAt = "2023-10-18", ModifiedBy = "User2" }
            );


        }
        public DbSet<Project> projects { get; set; }
        public DbSet<AccessLevel> accessLevels { get; set; }
        public DbSet<UserProjectAccess> userProjectAccesses { get; set; }
        public DbSet<User> users { get; set; }
        public DbSet<PublishedDesign> publisedDesigns { get; set; }
        public DbSet<DesignHistory> designHistories { get; set; }
    }
}
