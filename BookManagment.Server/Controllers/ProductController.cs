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
            var books = (
              from ba in _context.BookAuthors
              join b in _context.Books
                  on ba.BookId equals b.Id
              join a in _context.Authors
                  on ba.AuthorId equals a.Id
              join c in _context.Categories
                  on b.CategoryId equals c.Id
            join p in _context.Publishers 
            on b.PublisherId equals p.Id
              join r in _context.Books
              

              select new
              {
                  b.Id,
                  b.Title,
                  b.Price,
                  b.Status,
                  b.CoverImageUrl,
                  Author = a.Name,
                  Category = c.Name,
                  b.Format,
                  b.Description,
                  b.Language,
                  r.Rating


              }
          ).ToList();
            return Ok(new
            {
                success = true,
                data = books
            });
        }



    }
}
