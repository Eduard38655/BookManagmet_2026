using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Notification
{
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("type")]
    public string Type { get; set; } = null!;

    [Column("title")]
    public string Title { get; set; } = null!;

    [Column("message")]
    public string Message { get; set; } = null!;

    [Column("is_read")]
    public int IsRead { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    public virtual User User { get; set; } = null!;
}
