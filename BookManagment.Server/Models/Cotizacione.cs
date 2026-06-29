using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Cotizacione
{
    [Column("id")]
    public int Id { get; set; }

    [Column("cliente_id")]
    public int ClienteId { get; set; }

    [Column("fecha")]
    public DateTime? Fecha { get; set; }

    [Column("subtotal")]
    public decimal? Subtotal { get; set; }

    [Column("descuento")]
    public decimal? Descuento { get; set; }

    [Column("impuestos")]
    public decimal? Impuestos { get; set; }

    [Column("total")]
    public decimal? Total { get; set; }

    [Column("estado")]
    public string? Estado { get; set; }

    public virtual Cliente Cliente { get; set; } = null!;

    public virtual ICollection<DetalleCotizacione> DetalleCotizaciones { get; set; } = new List<DetalleCotizacione>();

    public virtual ICollection<Venta> Venta { get; set; } = new List<Venta>();
}
