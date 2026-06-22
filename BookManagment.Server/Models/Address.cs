using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Address
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string RecipientName { get; set; } = null!;

    public string? Phone { get; set; }

    public string Line1 { get; set; } = null!;

    public string? Line2 { get; set; }

    public string City { get; set; } = null!;

    public string? State { get; set; }

    public string Country { get; set; } = null!;

    public string? PostalCode { get; set; }

    public int IsDefault { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual User User { get; set; } = null!;
}
