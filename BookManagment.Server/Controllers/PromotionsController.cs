using BookManagment.Server.Dto;
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
            var GetPromo = _context.Promotions.Include(x => x.Books).ThenInclude(x => x.Category).FirstOrDefault(x => x.Id == PromoID);


            var categories = _context.Categories.ToList();
            return Ok(new { ok = true, data = GetPromo, category = categories });

        }


        [HttpPut("UpdateById")]
        public async Task<IActionResult> UpdatePromo([FromBody] PromotionsDto dto)
        {


            var promo = await _context.Promotions.FindAsync(dto.Id);

            if (promo == null)
                return NotFound();

            promo.Code = dto.Code;
            promo.Name = dto.Name;
            promo.ImageUrl = dto.ImageUrl;
            promo.DiscountType = dto.DiscountType;
            promo.DiscountValue = dto.DiscountValue;
            promo.MinPurchase = dto.MinPurchase;
            promo.StartDate = dto.StartDate;
            promo.EndDate = dto.EndDate;
            promo.Status = dto.Status;
            //Agregar la description en la base de datos promo.Description = dto.Description;

            await _context.SaveChangesAsync();

            return Ok(new { ok = true });
            /*
            var Promo = new Promotion
            {

                Id = dto.Id,
                Code = dto.Code,
                Name = dto.Name,
                ImageUrl = dto.ImageUrl,
                DiscountType = dto.DiscountType,
                DiscountValue = dto.DiscountValue,
                MinPurchase = dto.MinPurchase,
                StartDate = dto.StartDate,
                EndDate = dto.EndDate,
                Status = dto.Status


            };
            */



        }




    }
}
