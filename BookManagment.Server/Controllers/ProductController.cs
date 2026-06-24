using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.FlowAnalysis;
using Microsoft.EntityFrameworkCore;
using System.Net;

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
            var books =
  (
      from ba in _context.BookAuthors

      join b in _context.Books
          on ba.BookId equals b.Id

      join a in _context.Authors
          on ba.AuthorId equals a.Id

      join c in _context.Categories
          on b.CategoryId equals c.Id

      join p in _context.Publishers
          on b.PublisherId equals p.Id

      join r in _context.Reviews
          on b.Id equals r.BookId into reviews

      from r in reviews.DefaultIfEmpty()

      join cus in _context.Customers
          on r.CustomerId equals cus.Id into customers

      from cus in customers.DefaultIfEmpty()

      join us in _context.Users
          on cus.UserId equals us.Id into users

      from us in users.DefaultIfEmpty()

      select new
      {
          b.Id,
          b.Title,
          b.Price,
          b.Status,
          b.CoverImageUrl,

          Author = a.Name,
          Category = c.Name,
          Publisher = p.Name,

          b.Format,
          b.Description,
          b.Language,

          Rating = r != null ? r.Rating : 0,
          Comment = r != null ? r.Comment : "",

          CustomerName = us != null ? us.FullName : "",
          CustomerAvatar = us != null ? us.AvatarUrl : "",

          b.PublishedYear,
          a.ImageUrl,
          a.Bio,
          b.Isbn
      }
  ).ToList();
            return Ok(new
            {
                success = true,
                data = books
            });
        }




        [HttpPost("findbyid")]
        public IActionResult FindById([FromBody] int BookID)
        {
            var book = _context.Books.Find(1);

            if (book == null)
            {
                return NotFound(new
                {
                    success = false,
                    message = "Libro no encontrado",
                    id = BookID
                });
            }

            return Ok(new
            {
                success = true,
                data = book,
                id = BookID
            });
        }



    }
}
