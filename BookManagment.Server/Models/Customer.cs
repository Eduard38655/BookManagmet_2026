using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Customer
{
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("loyalty_points")]
    public int LoyaltyPoints { get; set; }

    [Column("newsletter_opt_in")]
    public int NewsletterOptIn { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual ICollection<ShoppingCart> ShoppingCarts { get; set; } = new List<ShoppingCart>();

    public virtual ICollection<SupportTicket> SupportTickets { get; set; } = new List<SupportTicket>();

    public virtual User User { get; set; } = null!;

    public virtual ICollection<Wishlist> Wishlists { get; set; } = new List<Wishlist>();
}
