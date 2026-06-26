using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class CartItem
{
    public int Id { get; set; }
    [Column("cart_id")]
    public int CartId { get; set; }
    [Column("book_id")]
    public int BookId { get; set; }

    public int Quantity { get; set; }

    public decimal UnitPrice { get; set; }

    public virtual Book Book { get; set; } = null!;

    public virtual ShoppingCart Cart { get; set; } = null!;
}
