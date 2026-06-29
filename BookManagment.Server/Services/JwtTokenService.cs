using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BookManagment.Server.Services
{
    public class JwtTokenService : IJwtTokenService
    {
        private readonly string _key;
        private readonly string _issuer;
        private readonly string _audience;
        private readonly int _expirationMinutes;

        public JwtTokenService(IConfiguration configuration)
        {
            _key = configuration["Jwt:Key"] ?? throw new ArgumentNullException("Jwt:Key not configured");
            _issuer = configuration["Jwt:Issuer"] ?? string.Empty;
            _audience = configuration["Jwt:Audience"] ?? string.Empty;
            _expirationMinutes = int.TryParse(configuration["Jwt:ExpirationMinutes"], out var m) ? m : 120;
        }

        public string GenerateToken(
            string id,
            string email,
            string customerId
            )
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, id),
                new Claim(ClaimTypes.Email, email)
            };

            if (!string.IsNullOrEmpty(customerId))
            {
                claims.Add(new Claim("customer_id", customerId));
            }

            var securityKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_key)
            );

            var credentials = new SigningCredentials(
                securityKey,
                SecurityAlgorithms.HmacSha256
            );

            var token = new JwtSecurityToken(
                issuer: _issuer,
                audience: _audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(_expirationMinutes),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler()
                .WriteToken(token);
        }
    }
}
