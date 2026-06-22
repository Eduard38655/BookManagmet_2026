using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Publisher
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? Website { get; set; }

    public virtual ICollection<Book> Books { get; set; } = new List<Book>();
}
