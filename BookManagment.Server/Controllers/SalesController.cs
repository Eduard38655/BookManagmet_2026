using Microsoft.AspNetCore.Mvc;

namespace BookManagment.Server.Controllers
{
    public class SalesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
