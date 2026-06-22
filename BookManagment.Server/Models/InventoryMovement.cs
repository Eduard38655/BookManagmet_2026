using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class InventoryMovement
{
    public int Id { get; set; }

    public int BookId { get; set; }

    public string MovementType { get; set; } = null!;

    public int Quantity { get; set; }

    public string? Reason { get; set; }

    public string? ReferenceType { get; set; }

    public int? ReferenceId { get; set; }

    public string CreatedAt { get; set; } = null!;

    public virtual Book Book { get; set; } = null!;
}
