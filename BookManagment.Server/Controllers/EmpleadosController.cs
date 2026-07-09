using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{

    [ApiController]
    [Route("empleados")]
    public class EmpleadosController : ControllerBase
    {

        private readonly BookstoreEcommerceDbContext _context;

        public EmpleadosController(BookstoreEcommerceDbContext context)
        {
            _context = context;
        }

        [HttpGet("getallempleados")]
        public async Task<IActionResult> GetAllEmpleados()
        {
            var empleados = await _context.Employees.Include(x=>x.User)
                .Select(x => new
                {
                    x.Id,
                    x.User.FullName,
                    x.User.Email,
                    x.User.Phone,
                    x.User.Status,
                    x.Position,
                    x.Salary,
                    x.User.AvatarUrl,
                    x.User.Role,
                    x.User.CreatedAt

                }).ToListAsync();
                
               
            return Ok(new { data = empleados, ok = true });
        }



    }
}
 