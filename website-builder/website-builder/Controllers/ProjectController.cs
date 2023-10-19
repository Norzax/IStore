using Application.Contracts.Features;
using DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace website_builder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProject _project;
        public ProjectController(IProject project)
        {
            _project = project;
        }

        [HttpGet]
        public IActionResult GetAllProject()
        {
            IList<Project> list = _project.GetAllProjects();
            return Ok(list);
        }
    }
}
