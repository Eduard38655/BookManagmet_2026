using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class AuditLog
{
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    public int? UserId { get; set; }

    [Column("action")]
    public string Action { get; set; } = null!;

    [Column("entity_name")]
    public string EntityName { get; set; } = null!;

    [Column("entity_id")]
    public int? EntityId { get; set; }

    [Column("details")]
    public string? Details { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    public virtual User? User { get; set; }
}
