using Application.Contracts.Features;
using DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace website_builder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublishedDesignController : ControllerBase
    {
        private readonly IPublishedDesign _publishedDesign;
        public PublishedDesignController(IPublishedDesign publishedDesign)
        {
            _publishedDesign = publishedDesign;
        }

        [HttpGet]
        public IActionResult GetAllPublishedDesign()
        {
            IList<PublishedDesign> list = _publishedDesign.GetAllPublishedDesigns();
            return Ok(list);
        }
    }
}
