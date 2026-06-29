using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class InventoryMovement
{
    [Column("id")]
    public int Id { get; set; }

    [Column("book_id")]
    public int BookId { get; set; }

    [Column("movement_type")]
    public string MovementType { get; set; } = null!;

    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("reason")]
    public string? Reason { get; set; }

    [Column("reference_type")]
    public string? ReferenceType { get; set; }

    [Column("reference_id")]
    public int? ReferenceId { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    public virtual Book Book { get; set; } = null!;
}
