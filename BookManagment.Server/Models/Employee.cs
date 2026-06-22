using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Employee
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string Position { get; set; } = null!;

    public decimal Salary { get; set; }

    public string Status { get; set; } = null!;

    public string HiredAt { get; set; } = null!;

    public virtual ICollection<PurchaseOrder> PurchaseOrders { get; set; } = new List<PurchaseOrder>();

    public virtual User User { get; set; } = null!;
}
