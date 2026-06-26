using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class ShoppingCart
{
    public int Id { get; set; }

    [Column("customer_id ")]
    public int CustomerId { get; set; }

    public string Status { get; set; } = null!;
    [Column("created_at")]
    public string CreatedAt { get; set; } = null!;

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual Customer Customer { get; set; } = null!;
}
