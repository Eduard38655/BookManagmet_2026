using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Cliente
{
    [Column("id")]
    public int Id { get; set; }

    [Column("nombre")]
    public string Nombre { get; set; } = null!;

    [Column("apellido")]
    public string? Apellido { get; set; }

    [Column("telefono")]
    public string? Telefono { get; set; }

    [Column("email")]
    public string? Email { get; set; }

    [Column("direccion")]
    public string? Direccion { get; set; }

    [Column("fecha_creacion")]
    public DateTime? FechaCreacion { get; set; }

    public virtual ICollection<Cotizacione> Cotizaciones { get; set; } = new List<Cotizacione>();

    public virtual ICollection<Venta> Venta { get; set; } = new List<Venta>();
}
