using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Customer
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int LoyaltyPoints { get; set; }

    public int NewsletterOptIn { get; set; }

    public string CreatedAt { get; set; } = null!;

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    // Navegaciones adicionales usadas por el model builder
    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
    public virtual ICollection<ShoppingCart> ShoppingCarts { get; set; } = new List<ShoppingCart>();
    public virtual ICollection<SupportTicket> SupportTickets { get; set; } = new List<SupportTicket>();
    public virtual ICollection<Wishlist> Wishlists { get; set; } = new List<Wishlist>();

    public virtual User? User { get; set; }
}
