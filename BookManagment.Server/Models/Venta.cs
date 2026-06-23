using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Venta
{
    public int Id { get; set; }

    public int? CotizacionId { get; set; }

    public int ClienteId { get; set; }

    public DateTime? Fecha { get; set; }

    public decimal? Subtotal { get; set; }

    public decimal? Impuestos { get; set; }

    public decimal? Total { get; set; }

    public string? MetodoPago { get; set; }

    public virtual Cliente Cliente { get; set; } = null!;

    public virtual Cotizacione? Cotizacion { get; set; }

    public virtual ICollection<DetalleVenta> DetalleVenta { get; set; } = new List<DetalleVenta>();
}
