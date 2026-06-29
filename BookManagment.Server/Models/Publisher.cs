using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Publisher
{
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = null!;

    [Column("logo_url")]
    public string? LogoUrl { get; set; }

    [Column("email")]
    public string? Email { get; set; }

    [Column("phone")]
    public string? Phone { get; set; }

    [Column("website")]
    public string? Website { get; set; }

    public virtual ICollection<Book> Books { get; set; } = new List<Book>();
}
