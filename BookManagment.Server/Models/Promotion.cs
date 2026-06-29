using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Promotion
{
    [Column("id")]
    public int Id { get; set; }

    [Column("code")]
    public string Code { get; set; } = null!;

    [Column("name")]
    public string Name { get; set; } = null!;

    [Column("image_url")]
    public string? ImageUrl { get; set; }

    [Column("discount_type")]
    public string DiscountType { get; set; } = null!;

    [Column("discount_value")]
    public decimal DiscountValue { get; set; }

    [Column("min_purchase")]
    public decimal MinPurchase { get; set; }

    [Column("start_date")]
    public DateTime StartDate { get; set; }

    [Column("end_date")]
    public DateTime EndDate { get; set; }

    [Column("status")]
    public string Status { get; set; } = null!;

    public virtual ICollection<PromotionBook> PromotionBooks { get; set; } = new List<PromotionBook>();
}
