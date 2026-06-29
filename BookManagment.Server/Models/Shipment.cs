using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Shipment
{
    [Column("id")]
    public int Id { get; set; }

    [Column("order_id")]
    public int OrderId { get; set; }

    [Column("carrier")]
    public string Carrier { get; set; } = null!;

    [Column("tracking_number")]
    public string? TrackingNumber { get; set; }

    [Column("status")]
    public string Status { get; set; } = null!;

    [Column("shipped_at")]
    public DateTime? ShippedAt { get; set; }

    [Column("delivered_at")]
    public DateTime? DeliveredAt { get; set; }

    public virtual Order Order { get; set; } = null!;
}
