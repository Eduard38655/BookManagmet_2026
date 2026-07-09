using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Order
{
    public int Id { get; set; }

    public string OrderNumber { get; set; } = null!;

    public int CustomerId { get; set; }

    public int AddressId { get; set; }

    public string Status { get; set; } = null!;

    public string PaymentStatus { get; set; } = null!;

    public decimal Subtotal { get; set; }

    public decimal Discount { get; set; }

    public decimal Tax { get; set; }

    public decimal Shipping { get; set; }

    public decimal Total { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual Address Address { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Shipment> Shipments { get; set; } = new List<Shipment>();
}
