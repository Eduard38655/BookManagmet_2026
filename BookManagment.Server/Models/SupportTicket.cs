using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class SupportTicket
{
    [Column("id")]
    public int Id { get; set; }

    [Column("customer_id")]
    public int CustomerId { get; set; }

    [Column("subject")]
    public string Subject { get; set; } = null!;

    [Column("status")]
    public string Status { get; set; } = null!;

    [Column("priority")]
    public string Priority { get; set; } = null!;

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    public virtual Customer Customer { get; set; } = null!;
}
