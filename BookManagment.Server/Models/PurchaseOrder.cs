using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class PurchaseOrder
{
    public int Id { get; set; }

    public string PoNumber { get; set; } = null!;

    public int SupplierId { get; set; }

    public int EmployeeId { get; set; }

    public string Status { get; set; } = null!;

    public decimal TotalCost { get; set; }

    public DateTime OrderedAt { get; set; }

    public DateTime? ReceivedAt { get; set; }

    public virtual Employee Employee { get; set; } = null!;

    public virtual ICollection<PurchaseOrderItem> PurchaseOrderItems { get; set; } = new List<PurchaseOrderItem>();

    public virtual Supplier Supplier { get; set; } = null!;
}
