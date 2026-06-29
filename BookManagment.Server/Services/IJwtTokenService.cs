namespace BookManagment.Server.Services
{
    public interface IJwtTokenService
    {
        string GenerateToken(string id, string email, string customerId);
    }
}
