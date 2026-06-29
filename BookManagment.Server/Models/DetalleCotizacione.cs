using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class DetalleCotizacione
{
    [Column("id")]
    public int Id { get; set; }

    [Column("cotizacion_id")]
    public int CotizacionId { get; set; }

    [Column("producto_id")]
    public int ProductoId { get; set; }

    [Column("cantidad")]
    public int Cantidad { get; set; }

    [Column("precio")]
    public decimal Precio { get; set; }

    [Column("subtotal")]
    public decimal Subtotal { get; set; }

    public virtual Cotizacione Cotizacion { get; set; } = null!;

    public virtual Producto Producto { get; set; } = null!;
}
