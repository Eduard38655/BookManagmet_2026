using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Notification
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string Type { get; set; } = null!;

    public string Title { get; set; } = null!;

    public string Message { get; set; } = null!;

    public int IsRead { get; set; }

    public string CreatedAt { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
