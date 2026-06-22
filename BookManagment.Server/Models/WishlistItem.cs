using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class WishlistItem
{
    public int Id { get; set; }

    public int WishlistId { get; set; }

    public int BookId { get; set; }

    public string CreatedAt { get; set; } = null!;

    public virtual Book Book { get; set; } = null!;

    public virtual Wishlist Wishlist { get; set; } = null!;
}
