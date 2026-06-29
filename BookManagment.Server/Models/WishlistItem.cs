using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class WishlistItem
{
    [Column("id")]
    public int Id { get; set; }

    [Column("wishlist_id")]
    public int WishlistId { get; set; }

    [Column("book_id")]
    public int BookId { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    public virtual Book Book { get; set; } = null!;

    public virtual Wishlist Wishlist { get; set; } = null!;
}
