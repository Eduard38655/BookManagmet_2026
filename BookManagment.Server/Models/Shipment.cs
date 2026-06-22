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

    public string? ShippedAt { get; set; }

    public string? DeliveredAt { get; set; }

    public virtual Order Order { get; set; } = null!;
}
