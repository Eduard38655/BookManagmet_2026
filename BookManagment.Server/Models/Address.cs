using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Address
{
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("recipient_name")]
    public string RecipientName { get; set; } = null!;

    [Column("phone")]
    public string? Phone { get; set; }

    [Column("line1")]
    public string Line1 { get; set; } = null!;

    [Column("line2")]
    public string? Line2 { get; set; }

    [Column("city")]
    public string City { get; set; } = null!;

    [Column("state")]
    public string? State { get; set; }

    [Column("country")]
    public string Country { get; set; } = null!;

    [Column("postal_code")]
    public string? PostalCode { get; set; }

    [Column("is_default")]
    public int IsDefault { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual User User { get; set; } = null!;
}
