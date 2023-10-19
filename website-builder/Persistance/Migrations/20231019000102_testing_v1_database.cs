using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    public partial class testing_v1_database : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "accessLevels",
                columns: table => new
                {
                    AccessLevelID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_accessLevels", x => x.AccessLevelID);
                });

            migrationBuilder.CreateTable(
                name: "designHistories",
                columns: table => new
                {
                    DesignHistoryID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DesignID = table.Column<int>(type: "int", nullable: false),
                    Version = table.Column<int>(type: "int", nullable: false),
                    ModifiedAt = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    ModifiedBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_designHistories", x => x.DesignHistoryID);
                });

            migrationBuilder.CreateTable(
                name: "projects",
                columns: table => new
                {
                    ProjectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    ProjectDescription = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    UpdateAt = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projects", x => x.ProjectId);
                });

            migrationBuilder.CreateTable(
                name: "publisedDesigns",
                columns: table => new
                {
                    PublishedDesignID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PublishDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PublishedBy = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_publisedDesigns", x => x.PublishedDesignID);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.UserID);
                });

            migrationBuilder.CreateTable(
                name: "userProjectAccesses",
                columns: table => new
                {
                    UserProjectAccessID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    ProjectID = table.Column<int>(type: "int", nullable: false),
                    AccessLevelID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userProjectAccesses", x => x.UserProjectAccessID);
                    table.ForeignKey(
                        name: "FK_userProjectAccesses_accessLevels_AccessLevelID",
                        column: x => x.AccessLevelID,
                        principalTable: "accessLevels",
                        principalColumn: "AccessLevelID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_userProjectAccesses_projects_ProjectID",
                        column: x => x.ProjectID,
                        principalTable: "projects",
                        principalColumn: "ProjectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_userProjectAccesses_users_UserID",
                        column: x => x.UserID,
                        principalTable: "users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "accessLevels",
                columns: new[] { "AccessLevelID", "Description" },
                values: new object[,]
                {
                    { 1, "AllControll" },
                    { 2, "Review" },
                    { 3, "Changable" }
                });

            migrationBuilder.InsertData(
                table: "designHistories",
                columns: new[] { "DesignHistoryID", "DesignID", "ModifiedAt", "ModifiedBy", "Version" },
                values: new object[,]
                {
                    { 1, 1, "2023-10-17", "User1", 1 },
                    { 2, 2, "2023-10-18", "User2", 1 }
                });

            migrationBuilder.InsertData(
                table: "projects",
                columns: new[] { "ProjectId", "CreatedAt", "ProjectDescription", "ProjectName", "UpdateAt" },
                values: new object[,]
                {
                    { 1, "2023-10-17", "Description 1", "Project 1", "2023-10-18" },
                    { 2, "2023-10-18", "Description 2", "Project 2", "2023-10-19" }
                });

            migrationBuilder.InsertData(
                table: "publisedDesigns",
                columns: new[] { "PublishedDesignID", "PublishDate", "PublishedBy" },
                values: new object[,]
                {
                    { 1, new DateTime(2023, 10, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), "Admin1" },
                    { 2, new DateTime(2023, 10, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Admin2" }
                });

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "UserID", "Email", "Password", "Username" },
                values: new object[,]
                {
                    { 1, "user1@example.com", "password1", "user1" },
                    { 2, "user2@example.com", "password2", "user2" }
                });

            migrationBuilder.InsertData(
                table: "userProjectAccesses",
                columns: new[] { "UserProjectAccessID", "AccessLevelID", "ProjectID", "UserID" },
                values: new object[] { 1, 1, 1, 1 });

            migrationBuilder.InsertData(
                table: "userProjectAccesses",
                columns: new[] { "UserProjectAccessID", "AccessLevelID", "ProjectID", "UserID" },
                values: new object[] { 2, 2, 2, 2 });

            migrationBuilder.CreateIndex(
                name: "IX_userProjectAccesses_AccessLevelID",
                table: "userProjectAccesses",
                column: "AccessLevelID");

            migrationBuilder.CreateIndex(
                name: "IX_userProjectAccesses_ProjectID",
                table: "userProjectAccesses",
                column: "ProjectID");

            migrationBuilder.CreateIndex(
                name: "IX_userProjectAccesses_UserID",
                table: "userProjectAccesses",
                column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "designHistories");

            migrationBuilder.DropTable(
                name: "publisedDesigns");

            migrationBuilder.DropTable(
                name: "userProjectAccesses");

            migrationBuilder.DropTable(
                name: "accessLevels");

            migrationBuilder.DropTable(
                name: "projects");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
