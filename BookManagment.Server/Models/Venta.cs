using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class Venta
{
    [Column("id")]
    public int Id { get; set; }

    [Column("cotizacion_id")]
    public int? CotizacionId { get; set; }

    [Column("cliente_id")]
    public int ClienteId { get; set; }

    [Column("fecha")]
    public DateTime? Fecha { get; set; }

    [Column("subtotal")]
    public decimal? Subtotal { get; set; }

    [Column("impuestos")]
    public decimal? Impuestos { get; set; }

    [Column("total")]
    public decimal? Total { get; set; }

    [Column("metodo_pago")]
    public string? MetodoPago { get; set; }

    public virtual Cliente Cliente { get; set; } = null!;

    public virtual Cotizacione? Cotizacion { get; set; }

    public virtual ICollection<DetalleVenta> DetalleVenta { get; set; } = new List<DetalleVenta>();
}
