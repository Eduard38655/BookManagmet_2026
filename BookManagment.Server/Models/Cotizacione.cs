using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class Cotizacione
{
    public int Id { get; set; }

    public int ClienteId { get; set; }

    public DateTime? Fecha { get; set; }

    public decimal? Subtotal { get; set; }

    public decimal? Descuento { get; set; }

    public decimal? Impuestos { get; set; }

    public decimal? Total { get; set; }

    public string? Estado { get; set; }

    public virtual Cliente Cliente { get; set; } = null!;

    public virtual ICollection<DetalleCotizacione> DetalleCotizaciones { get; set; } = new List<DetalleCotizacione>();

    public virtual ICollection<Venta> Venta { get; set; } = new List<Venta>();
}
