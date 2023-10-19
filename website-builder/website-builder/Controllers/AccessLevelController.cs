using Application.Contracts.Features;
using DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace website_builder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessLevelController : ControllerBase
    {
        private readonly IAccessLevel _accessLevel;
        public AccessLevelController(IAccessLevel accessLevel)
        {
            _accessLevel = accessLevel;
        }

        [HttpGet]
        public IActionResult GetAllAccessLevel()
        {
            IList<AccessLevel> listDesignHistory = _accessLevel.GetAllAccessLevels();
            return Ok(listDesignHistory);
        }
    }
}
