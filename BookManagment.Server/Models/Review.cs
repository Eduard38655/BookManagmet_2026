using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Review
{
    public int Id { get; set; }
    [Column("customer_id")]
    public int CustomerId { get; set; }
    [Column("book_id")]
    public int BookId { get; set; }

    public int Rating { get; set; }

    public string? Comment { get; set; }

    public string Status { get; set; } = null!;

    public string CreatedAt { get; set; } = null!;

    public virtual Book Book { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;
}
