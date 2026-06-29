using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Payment
{
    [Column("id")]
    public int Id { get; set; }

    [Column("order_id")]
    public int OrderId { get; set; }

    [Column("method")]
    public string Method { get; set; } = null!;

    [Column("status")]
    public string Status { get; set; } = null!;

    [Column("transaction_ref")]
    public string? TransactionRef { get; set; }

    [Column("amount")]
    public decimal Amount { get; set; }

    [Column("paid_at")]
    public DateTime? PaidAt { get; set; }

    public virtual Order Order { get; set; } = null!;
}
