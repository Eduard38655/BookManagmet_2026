using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class ShoppingCart
{
    public int Id { get; set; }

    public int CustomerId { get; set; }

    public string Status { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual Customer Customer { get; set; } = null!;
}
