using System.ComponentModel.DataAnnotations;
namespace BookManagment.Server.Dto
{
    public class LoginUserDto
    {
        [Required]
        public string Email { get; set; } = null!;

        [Required]
        public string PasswordHash { get; set; } = null!;
    }
}
