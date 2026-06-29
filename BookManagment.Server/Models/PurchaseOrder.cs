using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class PurchaseOrder
{
    [Column("id")]
    public int Id { get; set; }

    [Column("po_number")]
    public string PoNumber { get; set; } = null!;

    [Column("supplier_id")]
    public int SupplierId { get; set; }

    [Column("employee_id")]
    public int EmployeeId { get; set; }

    [Column("status")]
    public string Status { get; set; } = null!;

    [Column("total_cost")]
    public decimal TotalCost { get; set; }

    [Column("ordered_at")]
    public DateTime OrderedAt { get; set; }

    [Column("received_at")]
    public DateTime? ReceivedAt { get; set; }

    public virtual Employee Employee { get; set; } = null!;

    public virtual ICollection<PurchaseOrderItem> PurchaseOrderItems { get; set; } = new List<PurchaseOrderItem>();

    public virtual Supplier Supplier { get; set; } = null!;
}
