using Microsoft.AspNetCore.Http;

namespace BookManagment.Server.Middleware
{
    public class CookieValidationMiddleware
    {

		private readonly RequestDelegate _next;
		private readonly IJwtTokenService _jwtTokenService;

		public CookieValidationMiddleware(
			RequestDelegate next,
			IJwtTokenService jwtTokenService)
		{
			_next = next;
			_jwtTokenService = jwtTokenService;
		}


		if (!context.Request.Cookies.TryGetValue("user_token", out var token))
{

	context.Response.StatusCode = StatusCodes.Status401Unauthorized;

    await context.Response.WriteAsJsonAsync(new

	{
			message = "No existe una sesión válida."
    });

    return;
}

var principal = _jwtTokenService.ValidateToken(token);

if (principal == null)
{
    context.Response.StatusCode = StatusCodes.Status401Unauthorized;

    await context.Response.WriteAsJsonAsync(new

	{
		message = "El token es inválido o ha expirado."
    });

    return;
}

context.User = principal;

await _next(context);
	}
}
