using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Promotion
{
    public int Id { get; set; }

    public string Code { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? ImageUrl { get; set; }

    public string DiscountType { get; set; } = null!;

    public decimal DiscountValue { get; set; }

    public decimal MinPurchase { get; set; }

    public string StartDate { get; set; } = null!;

    public string EndDate { get; set; } = null!;

    public string Status { get; set; } = null!;

    public virtual ICollection<Book> Books { get; set; } = new List<Book>();
}
