using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.FlowAnalysis;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{
    [ApiController]
    [Route("product")]
    public class ProductController : ControllerBase
    {


        private readonly BookstoreEcommerceDbContext _context;

        public ProductController(BookstoreEcommerceDbContext context)
        {
            _context = context;
        }



        [HttpGet("get")]
   
        public IActionResult Get()
        {
            var books = _context.Books
     .FromSqlRaw(@"
        SELECT b.*
        FROM books b
        INNER JOIN categories c
            ON b.category_id = c.id")
     .ToList();
            return Ok(new
            {
                success = true,
                data = books
            });
        }



    }
}
