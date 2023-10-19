using Application.Contracts.Features;
using Microsoft.EntityFrameworkCore;
using Persistance;
using website_builder.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//baoluan_testing_codefirst
builder.Services.AddDbContext<ApplicationDbContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddScoped<IAccessLevel, AccessLevelImp>();
builder.Services.AddScoped<IDesignHistory, DesignHistoryImp>();
builder.Services.AddScoped<IProject, ProjectImp>();
builder.Services.AddScoped<IPublishedDesign, PublishedDesignImp>();
builder.Services.AddScoped<IUser, UserImp>();
builder.Services.AddScoped<IUserProjectAccess, UserProjectAccessImp>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
