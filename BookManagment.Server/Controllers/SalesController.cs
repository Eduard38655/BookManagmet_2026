using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{
    [ApiController]
    [Route("salesdetails")]
    public class SalesController : ControllerBase
    {
        private readonly BookstoreEcommerceDbContext _context;

        public SalesController(BookstoreEcommerceDbContext context)
        {
            _context = context;
        }
        [HttpGet("getallsales")]
        public async Task<IActionResult> GetSales()
        {
            var sales = await _context.Payments

                .Include(x => x.Order)
                    .ThenInclude(x => x.Customer)
                        .ThenInclude(x => x.User)

                .Include(x => x.Order)
                    .ThenInclude(x => x.Employee)
                        .ThenInclude(x => x.User)

                .Include(x => x.Order)
                    .ThenInclude(x => x.OrderItems)
                        .ThenInclude(x => x.Book)
                            .ThenInclude(x => x.Category)

                .Select(x => new
                {
                    x.Id,
                    x.OrderId,
                    x.Amount,
                    x.Method,
                    x.PaidAt,

                    Order = new
                    {
                        x.Order.Id,
                        x.Order.OrderNumber,
                        x.Order.CustomerId,

                        Customer = new
                        {
                            x.Order.Customer.Id,
                            Name = x.Order.Customer.User.FullName,
                            Email = x.Order.Customer.User.Email
                        },

                        x.Order.EmployeeId,

                        Employee = new
                        {
                            x.Order.Employee.Id,
                            Name = x.Order.Employee.User.FullName
                        },

                        OrderItems = x.Order.OrderItems
                            .Select(oi => new
                            {
                                oi.Id,
                                oi.BookId,

                                Book = new
                                {
                                    oi.Book.Id,
                                    oi.Book.Title,

                                    Category = new
                                    {
                                        oi.Book.Category.Id,
                                        oi.Book.Category.Name
                                    }
                                },

                                oi.Quantity,
                                oi.UnitPrice,
                                oi.Total
                            })
                            .ToList()
                    }

                })
                .ToListAsync();


            return Ok(new
            {
                data = sales,
                ok = true
            });
        }


    }
}
