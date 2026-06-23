using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Book
{
    public int Id { get; set; }

    public string Isbn { get; set; } = null!;

    public string Title { get; set; } = null!;

    [Column("cover_image_url")]
    public string? CoverImageUrl { get; set; }

    public string? Description { get; set; }
   
    [Column("publisher_id")]
    public int? PublisherId { get; set; }

    public int? CategoryId { get; set; }

    public string Language { get; set; } = null!;

    public string Format { get; set; } = null!;

    public int? PublishedYear { get; set; }

    public decimal Price { get; set; }

    public decimal CostPrice { get; set; }

    public int Stock { get; set; }

    public string Status { get; set; } = null!;

    public virtual ICollection<BookAuthor> BookAuthors { get; set; } = new List<BookAuthor>();

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual Category? Category { get; set; }

    public virtual ICollection<InventoryMovement> InventoryMovements { get; set; } = new List<InventoryMovement>();

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual Publisher? Publisher { get; set; }

    public virtual ICollection<PurchaseOrderItem> PurchaseOrderItems { get; set; } = new List<PurchaseOrderItem>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual ICollection<WishlistItem> WishlistItems { get; set; } = new List<WishlistItem>();

    public virtual ICollection<Promotion> Promotions { get; set; } = new List<Promotion>();
}
