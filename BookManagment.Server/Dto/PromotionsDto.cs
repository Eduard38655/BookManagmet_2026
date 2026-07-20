using BookManagment.Server.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Dto
{
    public class PromotionsDto  
    {
        public int Id { get; set; }

        public string Code { get; set; } = null!;

        public string Name { get; set; } = null!;

        public string? ImageUrl { get; set; }

        public string DiscountType { get; set; } = null!;

        public decimal DiscountValue { get; set; }

        public decimal MinPurchase { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Status { get; set; } = null!;
    }
}
