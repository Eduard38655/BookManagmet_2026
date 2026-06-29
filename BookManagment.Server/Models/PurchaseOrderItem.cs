using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class PurchaseOrderItem
{
    [Column("id")]
    public int Id { get; set; }

    [Column("purchase_order_id")]
    public int PurchaseOrderId { get; set; }

    [Column("book_id")]
    public int BookId { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("cost_price")]
    public decimal CostPrice { get; set; }

    [Column("total_cost")]
    public decimal TotalCost { get; set; }

    public virtual Book Book { get; set; } = null!;

    public virtual PurchaseOrder PurchaseOrder { get; set; } = null!;
}
