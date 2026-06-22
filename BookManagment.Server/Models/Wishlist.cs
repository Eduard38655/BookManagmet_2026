using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Wishlist
{
    public int Id { get; set; }

    public int CustomerId { get; set; }

    public string CreatedAt { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;

    public virtual ICollection<WishlistItem> WishlistItems { get; set; } = new List<WishlistItem>();
}
