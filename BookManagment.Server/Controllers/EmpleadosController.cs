using BookManagment.Server.Dto;
using BookManagment.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookManagment.Server.Controllers
{

    [ApiController]
    [Route("employees")]
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
            var empleados = await _context.Employees.Include(x => x.User)
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


        [HttpGet("getempleadobyid/{EmployeeId}")]
        public async Task<IActionResult> GetEmpleadoById(int EmployeeId)
        {
            var empleados = await _context.Employees.Include(x => x.User)

                .Where(x => x.Id == EmployeeId)
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



        [HttpPut("updateEmp/{EmployeeId}")]
        public async Task<IActionResult> UpdateEmp([FromRoute] int EmployeeId,
    [FromBody] EmpleadoDto dto)
        {

            var user = await _context.Users.FindAsync(EmployeeId);

            user.FullName = dto.full_name;
            user.Email = dto.email;
            user.Phone = dto.phone;
            user.PasswordHash = dto.password_hash;
            user.AvatarUrl = dto.avatar_url;
            user.Status = dto.status;
            user.RoleId = dto.roleid;


            if (user == null)
            {
                return NotFound(new
                {
                    message = "Empleado no encontrado."
                });
            }


            var empleado = await _context.Employees.FirstOrDefaultAsync(x => x.UserId == EmployeeId);

            empleado.Position = dto.position;
            empleado.Status = dto.status;

            if (empleado == null)
            {
                return NotFound(new
                {
                    message = "Empleado no encontrado."
                });
            }



            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Empleado actualizado correctamente."
            });

        }




        [HttpPost("insertEmp")]
        public async Task<IActionResult> InsertEmp([FromBody] EmpleadoDto dto)
        {
            var newUser = new User
            {
                FullName = dto.full_name,
                Email = dto.email,
                Phone = dto.phone,
                PasswordHash = dto.password_hash,
                AvatarUrl = dto.avatar_url,
                Status = dto.status,
                RoleId = dto.roleid
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            var newEmployee = new Employee
            {
                UserId = newUser.Id,
                Position = dto.position,
                Status = dto.status,
                Salary = dto.salary
            };

            _context.Employees.Add(newEmployee);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Empleado agregado correctamente."
            });
        }















    }
}
