using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Shipment
{
    public int Id { get; set; }

    public int OrderId { get; set; }

    public string Carrier { get; set; } = null!;

    public string? TrackingNumber { get; set; }

    public string Status { get; set; } = null!;

    public DateTime? ShippedAt { get; set; }

    public DateTime? DeliveredAt { get; set; }
}
