using BookManagment.Server.Dto;
using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.Extensions.Logging;

namespace BookManagment.Server.Controllers
{

    [ApiController]
    [Route("shopping")]
    public class ShoppingCartController : ControllerBase
    {

        private readonly BookstoreEcommerceDbContext _context;
        private readonly ILogger<ShoppingCartController> _logger;

        public ShoppingCartController(BookstoreEcommerceDbContext context, ILogger<ShoppingCartController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost("add/book")]
        public async Task<IActionResult> InsertShopping([FromBody] AddShoppingCartDto dto)
        {
            if (dto == null)
            {
                return BadRequest(new { message = "Dto is required" });
            }

            try
            {
                // Intentar obtener customer_id desde el token
                var customerClaim = User.FindFirst("customer_id")?.Value;
                int customerId;

                if (string.IsNullOrEmpty(customerClaim) || !int.TryParse(customerClaim, out customerId))
                {
                    // Si no hay claim, intentar buscar/crear customer asociado al user id
                    var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                    if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out var userId))
                    {
                        _logger.LogWarning("Customer claim y user id ausentes o inválidos");
                        return Unauthorized(new { message = "Customer claim missing or invalid" });
                    }

                    var existingCustomer = await _context.Customers.FirstOrDefaultAsync(c => c.UserId == userId);
                    if (existingCustomer == null)
                    {
                        var newCustomer = new Customer
                        {
                            UserId = userId,
                            LoyaltyPoints = 0,
                            NewsletterOptIn = 1,
                            CreatedAt = DateTime.UtcNow
                        };

                        await _context.Customers.AddAsync(newCustomer);
                        await _context.SaveChangesAsync();
                        customerId = newCustomer.Id;
                    }
                    else
                    {
                        customerId = existingCustomer.Id;
                    }
                }

                // Buscar carrito abierto existente
                var cart = await _context.ShoppingCarts
                    .FirstOrDefaultAsync(s => s.Status == "open" && s.CustomerId == customerId);

                if (cart == null)
                {
                    cart = new Models.ShoppingCart
                    {
                        CustomerId = customerId,
                        Status = "open",
                        CreatedAt = DateTime.UtcNow
                    };

                    await _context.ShoppingCarts.AddAsync(cart);
                    await _context.SaveChangesAsync();
                }

                var shoppingCartItem = new Models.CartItem
                {
                    BookId = dto.BookId,
                    Quantity = dto.Quantity,
                    UnitPrice = dto.UnitPrice,
                    CartId = cart.Id
                };

                await _context.CartItems.AddAsync(shoppingCartItem);
                await _context.SaveChangesAsync();

                // Mapear a DTO para evitar referencias cíclicas
                var cartItemResponse = new CartItemResponseDto
                {
                    Id = shoppingCartItem.Id,
                    CartId = shoppingCartItem.CartId,
                    BookId = shoppingCartItem.BookId,
                    Quantity = shoppingCartItem.Quantity,
                    UnitPrice = shoppingCartItem.UnitPrice
                };

                return Ok(new { data = cartItemResponse, message = "Añadido al carrito" });
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "Error al guardar en la base de datos");
                return Problem(detail: dbEx.InnerException?.Message ?? dbEx.Message, statusCode: 500);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error en InsertShopping");
                return Problem(detail: ex.Message, statusCode: 500);
            }
        }



        [HttpGet("getall")]
        public async Task<IActionResult> Get()
        {
            var customerClaim = User.FindFirst("customer_id")?.Value;
         
            if (customerClaim == null)
            {
                return Unauthorized(new
                {
                    message = "Customer not found",
                    success = false
                });
            }
 
            var customerId = int.Parse(customerClaim);

            var Get_All_Shopping = await
            (
                from c in _context.CartItems
                join s in _context.ShoppingCarts
                on c.CartId equals s.Id
            
                join b in _context.Books
               on  c.BookId equals b.Id
 
               join a in _context.BookAuthors
               on b.Id equals a.BookId
               join au in _context.Authors
               on a.AuthorId equals au.Id
                where s.CustomerId == customerId

                select new
                {
                   s.CreatedAt,
                   c.Quantity,
                   c.UnitPrice,
                  b.Title,
                  b.Format,
                  au.Name,
                  b.CoverImageUrl,
                  b.Price,
                  b.CostPrice,
                 

                }

            ).ToListAsync();


            if (!Get_All_Shopping.Any())
            {
                return Ok(new
                {
                    data = new List<object>(),
                    success = false,
                    message = "Cart is empty"
                });
            }


            return Ok(new
            {
                data = Get_All_Shopping,
                success = true
            });
        }
    }
}
