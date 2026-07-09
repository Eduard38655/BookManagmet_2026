using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class SupportTicket
{
    public int Id { get; set; }

    public int CustomerId { get; set; }

    public string Subject { get; set; } = null!;

    public string Status { get; set; } = null!;

    public string Priority { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public virtual Customer Customer { get; set; } = null!;
}
