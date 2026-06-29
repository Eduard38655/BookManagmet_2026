using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class PurchaseOrderItem
{
    public int Id { get; set; }

    public int PurchaseOrderId { get; set; }

    public int BookId { get; set; }

    public int Quantity { get; set; }

    public decimal CostPrice { get; set; }

    public decimal TotalCost { get; set; }

    public virtual Book Book { get; set; } = null!;

    public virtual PurchaseOrder PurchaseOrder { get; set; } = null!;
}
