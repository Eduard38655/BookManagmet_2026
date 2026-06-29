using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BookManagment.Server.Models;

public partial class CartItem
{
    [Column("id")]
    public int Id { get; set; }

    [Column("cart_id")]
    public int CartId { get; set; }

    [Column("book_id")]
    public int BookId { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("unit_price")]
    public decimal UnitPrice { get; set; }

    public virtual Book Book { get; set; } = null!;

    [JsonIgnore]
    public virtual ShoppingCart Cart { get; set; } = null!;
}
