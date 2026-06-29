using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Book
{
    [Column("id")]
    public int Id { get; set; }

    [Column("isbn")]
    public string Isbn { get; set; } = null!;

    [Column("title")]
    public string Title { get; set; } = null!;

    [Column("cover_image_url")]
    public string? CoverImageUrl { get; set; }

    [Column("description")]
    public string? Description { get; set; }

    [Column("publisher_id")]
    public int? PublisherId { get; set; }

    [Column("category_id")]
    public int? CategoryId { get; set; }

    [Column("language")]
    public string Language { get; set; } = null!;

    [Column("format")]
    public string Format { get; set; } = null!;

    [Column("published_year")]
    public int? PublishedYear { get; set; }

    [Column("price")]
    public decimal Price { get; set; }

    [Column("cost_price")]
    public decimal CostPrice { get; set; }

    [Column("stock")]
    public int Stock { get; set; }

    [Column("status")]
    public string Status { get; set; } = null!;

    public virtual ICollection<BookAuthor> BookAuthors { get; set; } = new List<BookAuthor>();

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual Category? Category { get; set; }

    public virtual ICollection<InventoryMovement> InventoryMovements { get; set; } = new List<InventoryMovement>();

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual Publisher? Publisher { get; set; }

    public virtual ICollection<PromotionBook> PromotionBooks { get; set; } = new List<PromotionBook>();

    public virtual ICollection<PurchaseOrderItem> PurchaseOrderItems { get; set; } = new List<PurchaseOrderItem>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual ICollection<WishlistItem> WishlistItems { get; set; } = new List<WishlistItem>();
}
