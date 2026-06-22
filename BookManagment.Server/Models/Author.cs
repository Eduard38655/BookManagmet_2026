using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Author
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Nationality { get; set; }

    public string? Bio { get; set; }

    public virtual ICollection<BookAuthor> BookAuthors { get; set; } = new List<BookAuthor>();
}
