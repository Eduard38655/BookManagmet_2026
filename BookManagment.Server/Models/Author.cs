using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Author
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;
    [Column("image_url")]
    public string? ImageUrl { get; set; }

    public string? Nationality { get; set; }

    public string? Bio { get; set; }

    public virtual ICollection<BookAuthor> BookAuthors { get; set; } = new List<BookAuthor>();
}
