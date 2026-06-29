using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Producto
{
    [Column("id")]
    public int Id { get; set; }

    [Column("codigo")]
    public string Codigo { get; set; } = null!;

    [Column("nombre")]
    public string Nombre { get; set; } = null!;

    [Column("descripcion")]
    public string? Descripcion { get; set; }

    [Column("precio")]
    public decimal Precio { get; set; }

    [Column("stock")]
    public int? Stock { get; set; }

    [Column("fecha_creacion")]
    public DateTime? FechaCreacion { get; set; }

    public virtual ICollection<DetalleCotizacione> DetalleCotizaciones { get; set; } = new List<DetalleCotizacione>();

    public virtual ICollection<DetalleVenta> DetalleVenta { get; set; } = new List<DetalleVenta>();
}
