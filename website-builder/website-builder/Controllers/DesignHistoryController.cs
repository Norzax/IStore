using Application.Contracts.Features;
using DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace website_builder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DesignHistoryController : ControllerBase
    {
        private readonly IDesignHistory _designHistory;
        public DesignHistoryController(IDesignHistory designHistory)
        {
            _designHistory = designHistory;
        }

        [HttpGet]
        public IActionResult GetAllDesignHistory()
        {
            IList<DesignHistory> listDesignHistory = _designHistory.GetAllDesignHistories();
            return Ok(listDesignHistory);
        }
    }
}
