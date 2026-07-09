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
                     u.AvatarUrl

                 }

                ).ToListAsync();

            if (customers==null)
            {
                return NotFound("there was an errror");
                
            }

            return Ok(new { data = customers, ok = true });



        }
}
}
