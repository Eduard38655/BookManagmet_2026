using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class PromotionBook
{
    [Column("promotion_id")]
    public int PromotionId { get; set; }

    [Column("book_id")]
    public int BookId { get; set; }

    public virtual Book Book { get; set; } = null!;

    public virtual Promotion Promotion { get; set; } = null!;
}
