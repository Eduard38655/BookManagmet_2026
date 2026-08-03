using BookManagment.Server.Models;
using BookManagment.Server.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;


var builder = WebApplication.CreateBuilder(args);


// Database
builder.Services.AddDbContext<BookstoreEcommerceDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

Console.WriteLine(connectionString);





// JWT Service
builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();




// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", policy =>
    {
        policy
          .WithOrigins(
              "http://localhost:5173",
              "https://localhost:5173",
              "http://localhost:3000",
              "https://localhost:3000",
              "http://localhost:5174",
              "https://localhost:5174",
              "http://localhost:53879",
              "https://localhost:53879"
          )
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});





// JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,

        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],

        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
    };

    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            // If no Authorization header is present, try to read token from cookie 'user_token'
            if (string.IsNullOrEmpty(context.Request.Headers["Authorization"]))
            {
                if (context.Request.Cookies.TryGetValue("user_token", out var tokenFromCookie))
                {
                    context.Token = tokenFromCookie;
                }
            }

            return Task.CompletedTask;
        }
    };
});



builder.Services.AddAuthorization();


builder.Services.AddControllers().AddJsonOptions(options =>
{
    // Configurar JSON para manejar referencias cíclicas
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
    options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
});


builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();



var app = builder.Build();




// Static files
app.UseDefaultFiles();
app.UseStaticFiles();





if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwaggerUI();
}




app.UseHttpsRedirection();

app.UseCors("AllowLocalhost");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");


app.Run();