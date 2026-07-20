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


            var orders = await _context.Orders
      .Select(o => new
      {
          o.OrderNumber,
          o.PaymentStatus,
          o.CreatedAt,
          o.Total,
          o.Status,

          Customer = new
          {

              o.Customer.User.FullName,

          },
          Employee = new
          {

              o.Employee.User.FullName

          },
          Items = o.OrderItems.Select(oi => new
          {
              oi.Quantity,

              Book = new
              {
                  oi.Book.Id,
                  oi.Book.Title,
                  oi.Book.Price,

                  Inventory = oi.Book.InventoryMovements.Select(im => new
                  {
                      im.Id,
                      im.Quantity,
                      im.MovementType,
                      im.Reason
                  })
              }
          })
      })
      .ToListAsync();






            return Ok(new { data = orders, ok = true });
        }
    }
}
