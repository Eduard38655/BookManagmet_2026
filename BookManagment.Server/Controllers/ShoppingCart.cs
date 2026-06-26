using BookManagment.Server.Dto;
using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{

    [ApiController]
    [Route("shopping")]
    public class ShoppingCart: ControllerBase
    {

        private readonly BookstoreEcommerceDbContext _context;

        public ShoppingCart(BookstoreEcommerceDbContext context)
        {
            _context = context;
        }


        /*

             [HttpPost("Add/book/{BookId}")]
           public async Task<IActionResult> InsertShopping([FromBody] AddShoppingCartDto dto)
           {
               var shoppingCart = new Models.CartItem
               {
                   CartId = dto.BookId,
                    Cart= dto.CustomerId,
                   CreatedAt = DateTime.UtcNow
               };

               await _context.CartItems.AddAsync(shoppingCart);
               await _context.SaveChangesAsync();

               return Ok(shoppingCart);
           }
         */

    }
}
