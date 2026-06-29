using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Employee
{
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("position")]
    public string Position { get; set; } = null!;

    [Column("salary")]
    public decimal Salary { get; set; }

    [Column("status")]
    public string Status { get; set; } = null!;

    [Column("hired_at")]
    public DateTime HiredAt { get; set; }

    public virtual ICollection<PurchaseOrder> PurchaseOrders { get; set; } = new List<PurchaseOrder>();

    public virtual User User { get; set; } = null!;
}
