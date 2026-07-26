using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{
    [ApiController]
    [Route("customer")]
    public class CustomerController : ControllerBase
    {
        private readonly BookstoreEcommerceDbContext _context;

        public CustomerController(BookstoreEcommerceDbContext context)
        {

            _context = context;
        }


        [HttpGet("all")]
        public async Task<IActionResult> GetAllCustomer()
        {
            var customers = await (
                 from u in _context.Users
                 join c in _context.Customers
                 on u.Id equals c.UserId

                 join r in _context.Roles
                 on u.RoleId equals r.Id
                 select new
                 {
                     u.FullName,
                     u.Email,
                     u.Phone,
                     u.Status,
                     u.AvatarUrl,
                     c.CreatedAt,
                     c.Id
                 }

                ).ToListAsync();

            if (customers == null)
            {
                return NotFound("there was an errror");

            }

            return Ok(new { data = customers, ok = true });



        }

        [HttpGet("ClientById/{clienteId}")]
        public async Task<IActionResult> GetCustomer(int clienteId)
        {
            var customer = await _context.Customers
                .Where(c => c.Id == clienteId)
                .Select(c => new
                {
                    c.Id,

                    FullName = c.User.FullName,
                    Email = c.User.Email,
                    Phone = c.User.Phone,
                    AvatarUrl = c.User.AvatarUrl,
                    Status = c.User.Status,

                    c.LoyaltyPoints,
                    c.NewsletterOptIn,
                    c.CreatedAt,

                    Orders = c.Orders.Select(o => new
                    {
                        o.Id,
                        o.OrderNumber,
                        o.Status,
                        o.PaymentStatus,
                        o.Subtotal,
                        o.Total,
                        o.CreatedAt
                    }),

                    Wishlist = c.Wishlists
                        .SelectMany(w => w.WishlistItems)
                        .Select(w => new
                        {
                            BookId = w.Book.Id,
                            w.Book.Title,
                            w.Book.CoverImageUrl,
                            w.Book.Price
                        }),

                    Reviews = c.Reviews.Select(r => new
                    {
                        r.Id,
                        r.Rating,
                        r.Comment,
                        r.CreatedAt,

                        Book = new
                        {
                            r.Book.Id,
                            r.Book.Title,
                            r.Book.CoverImageUrl
                        }
                    })
                })
                .FirstOrDefaultAsync();

            if (customer == null)
                return NotFound("Cliente no encontrado.");

            return Ok(customer);
        }


    }
}
