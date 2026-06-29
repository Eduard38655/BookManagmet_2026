using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class BookAuthor
{
    [Column("book_id")]
    public int BookId { get; set; }

    [Column("author_id")]
    public int AuthorId { get; set; }

    [Column("is_primary")]
    public int IsPrimary { get; set; }

    public virtual Author Author { get; set; } = null!;

    public virtual Book Book { get; set; } = null!;
}
