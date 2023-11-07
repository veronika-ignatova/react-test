using Microsoft.AspNetCore.Mvc;

namespace react_test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult PrintHello()
        {
            return Content("Hello from backend!");
        }
    }
}
