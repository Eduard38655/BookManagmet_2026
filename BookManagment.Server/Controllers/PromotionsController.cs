using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{
    [ApiController]
    [Route("promos")]
    public class PromotionsController : ControllerBase
    {
        private readonly BookstoreEcommerceDbContext _context;
        public PromotionsController(BookstoreEcommerceDbContext context)
        {
            _context = context;
        }

        [HttpGet("getallpromotions")]
        public async Task<IActionResult> GetAllPromotions()
        {
            var promotions = await _context.Promotions.Include(x => x.Books)
                .ThenInclude(x => x.Category).ToListAsync();



            return Ok(new { data = promotions, ok = true });




        }


        [HttpGet("getById/{PromoID}")]
        public IActionResult GetByIdinFO([FromRoute] int PromoID)
        {
            var GetPromo = _context.Promotions.Include(x => x.Books).ThenInclude(x=>x.Category).FirstOrDefault(x=>x.Id == PromoID);


            var categories = _context.Categories.ToList();
            return Ok(new { ok = true, data = GetPromo, category = categories });

        }
    }
}
