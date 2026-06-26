using BookManagment.Server.Dto;
using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{

    [ApiController]
    [Route("login")]
    public class UserController : ControllerBase
    {


        private readonly BookstoreEcommerceDbContext _context;

        public UserController(BookstoreEcommerceDbContext context)
        {

            _context = context;
        }

         
     





        [HttpPost("maria.admin@libros.comfinduser")]
        public async Task<IActionResult> Login([FromBody] LoginUserDto dto)
        {

            var user = await _context.Users
      .FirstOrDefaultAsync(u =>
          u.Email == dto.Email &&
          u.PasswordHash == dto.PasswordHash);



            if (user == null)
            {
                return Unauthorized("Usuario o contraseña incorrectos.");
            }

            return Ok(user);

        }

    



}
}
