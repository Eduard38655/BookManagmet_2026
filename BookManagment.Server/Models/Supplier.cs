using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Supplier
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? LogoUrl { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? TaxId { get; set; }

    public string? Address { get; set; }

    public string? City { get; set; }

    public string? Country { get; set; }

    public string Status { get; set; } = null!;

    public virtual ICollection<PurchaseOrder> PurchaseOrders { get; set; } = new List<PurchaseOrder>();
}
