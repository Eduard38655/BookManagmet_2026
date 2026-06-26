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
            try
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
            catch (Exception ex)
            {
                // Evitar que una excepción de EF Core detennga la aplicación; devolver error claro al cliente
                return StatusCode(500, new { success = false, message = "Error al obtener libros", detail = ex.Message });
            }
        }



        /*Find Product Browse/id*/
        [HttpGet("findbyid/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var book = _context.Books.FirstOrDefault(b => b.Id == id);

                if (book == null)
                {
                    return NotFound(new
                    {
                        success = false,
                        message = "Libro no encontrado"
                    });
                }

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
         ).FirstOrDefault();
                return Ok(new
                {
                    success = true,
                    data = books
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = "Error al obtener libro", detail = ex.Message });
            }
        }



    }
}
