using Application.Contracts.Features;
using DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace website_builder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProjectAccessController : ControllerBase
    {
        private readonly IUserProjectAccess _userProjectAccess;
        public UserProjectAccessController(IUserProjectAccess userProjectAccess)
        {
            _userProjectAccess = userProjectAccess;
        }

        [HttpGet]
        public IActionResult GetAllUserProjectAccess()
        {
            IList<UserProjectAccess> list = _userProjectAccess.GetAllUserProjectAccesses();
            return Ok(list);
        }
    }
}
