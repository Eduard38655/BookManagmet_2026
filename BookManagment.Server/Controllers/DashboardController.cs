using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{
    [ApiController]
    [Route("salesoverview")]
    public class DashboardController : ControllerBase
    {
        private readonly BookstoreEcommerceDbContext _context;

        public DashboardController(BookstoreEcommerceDbContext context)
        {
            _context = context;
        }

        [HttpGet("orders")]
        public async Task<IActionResult> ObtenerOrders()
        {

            
            var Orders = await _context.Orders
      .Include(x => x.Customer)
          .ThenInclude(x => x.User)
        
      .Include(x => x.OrderItems)
          .ThenInclude(x => x.Book)
          .ThenInclude(x=>x.InventoryMovements)
        
      .ToListAsync();


            var Customers = await (
    from u in _context.Users
    where u.Status == "active"
    select new
    {
        u.FullName
    }
).ToListAsync();



            return Ok(new {data=Orders,ok=true,customer= Customers });
        }
    }
}
