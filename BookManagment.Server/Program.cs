using BookManagment.Server.Models;
using BookManagment.Server.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Npgsql;
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
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});





// JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme =
        JwtBearerDefaults.AuthenticationScheme;

    options.DefaultChallengeScheme =
        JwtBearerDefaults.AuthenticationScheme;

})
.AddJwtBearer(options =>
{

    options.TokenValidationParameters =
        new TokenValidationParameters
        {

            ValidateIssuer = true,

            ValidateAudience = true,

            ValidateLifetime = true,

            ValidateIssuerSigningKey = true,


            ValidIssuer =
                builder.Configuration["Jwt:Issuer"],


            ValidAudience =
                builder.Configuration["Jwt:Audience"],


            IssuerSigningKey =
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(
                        builder.Configuration["Jwt:Key"]!
                    )
                )

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





app.UseCors("AllowLocalhost");


app.UseHttpsRedirection();


// JWT middleware
app.UseAuthentication();

app.UseAuthorization();



app.MapControllers();


app.MapFallbackToFile("/index.html");


app.Run();