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

    public string CreatedAt { get; set; } = null!;

    public string UpdatedAt { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;
}
