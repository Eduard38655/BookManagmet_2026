using BookManagment.Server.Dto;
using BookManagment.Server.Models;
using BookManagment.Server.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;


[ApiController]
[Route("user")]
public class UserController : ControllerBase
{

    private readonly BookstoreEcommerceDbContext _context;
    private readonly ILogger<UserController> _logger;
    private readonly IJwtTokenService _jwtTokenService;


    public UserController(
        BookstoreEcommerceDbContext context,
        ILogger<UserController> logger,
        IJwtTokenService jwtTokenService)
    {
        _context = context;
        _logger = logger;
        _jwtTokenService = jwtTokenService;
    }



    [HttpPost("finduser")]
    public async Task<IActionResult> Login([FromBody] LoginUserDto dto)
    {

        if (dto == null ||
           string.IsNullOrWhiteSpace(dto.Email) ||
           string.IsNullOrWhiteSpace(dto.PasswordHash))
        {
            return BadRequest(new
            {
                success = false,
                message = "Email y contraseña son requeridos"
            });
        }



        var user = await
        (
            from u in _context.Users
            join r in _context.Roles on u.RoleId equals r.Id
            join c in _context.Customers on u.Id equals c.UserId into cust
            from c in cust.DefaultIfEmpty()
            where u.Email == dto.Email

            select new
            {
                u.Id,
                u.Email,
                u.FullName,
                u.AvatarUrl,
                u.PasswordHash,
                CustomerID = c == null ? (int?)null : c.Id,
                Role = r.Name
            }

        ).FirstOrDefaultAsync();



        if (user == null)
        {
            _logger.LogWarning(
                $"Usuario no encontrado {dto.Email}"
            );


            return Unauthorized(new
            {
                success = false,
                message = "Usuario o contraseña incorrectos"
            });
        }




        if (user.PasswordHash != dto.PasswordHash)
        {
            _logger.LogWarning(
                $"Password incorrecto {dto.Email}"
            );


            return Unauthorized(new
            {
                success = false,
                message = "Usuario o contraseña incorrectos"
            });
        }





            var token = _jwtTokenService.GenerateToken(

            user.Id.ToString(),

            user.Email,

            user.CustomerID?.ToString() ?? string.Empty

        );





        return Ok(new
        {
            success = true,

            token = token,


            user = new
            {
                id = user.Id,

                email = user.Email,

                fullName = user.FullName,

                avatar = user.AvatarUrl,

                role = user.Role
            }
        });


    }



    [HttpGet("profile")]
    public IActionResult Profile()
    {
        var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        var email = User.FindFirst(ClaimTypes.Email)?.Value;

        return Ok(new
        {
            id = id,
            email = email
        });
    }

}