using Application.Contracts.Features;
using DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace website_builder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser _user;
        public UserController(IUser user)
        {
            _user = user;
        }

        [HttpGet]
        public IActionResult GetAllUser()
        {
            IList<User> list = _user.GetAllUsers();
            return Ok(list);
        }
    }
}
