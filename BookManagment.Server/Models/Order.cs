using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Order
{
    [Column("id")]
    public int Id { get; set; }

    [Column("order_number")]
    public string OrderNumber { get; set; } = null!;

    [Column("customer_id")]
    public int CustomerId { get; set; }

    [Column("address_id")]
    public int AddressId { get; set; }

    [Column("status")]
    public string Status { get; set; } = null!;

    [Column("payment_status")]
    public string PaymentStatus { get; set; } = null!;

    [Column("subtotal")]
    public decimal Subtotal { get; set; }

    [Column("discount")]
    public decimal Discount { get; set; }

    [Column("tax")]
    public decimal Tax { get; set; }

    [Column("shipping")]
    public decimal Shipping { get; set; }

    [Column("total")]
    public decimal Total { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    public virtual Address Address { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Shipment> Shipments { get; set; } = new List<Shipment>();
}
