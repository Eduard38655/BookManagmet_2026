using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Models;

public partial class DetalleVenta
{
    [Column("id")]
    public int Id { get; set; }

    [Column("venta_id")]
    public int VentaId { get; set; }

    [Column("producto_id")]
    public int ProductoId { get; set; }

    [Column("cantidad")]
    public int Cantidad { get; set; }

    [Column("precio")]
    public decimal Precio { get; set; }

    [Column("subtotal")]
    public decimal Subtotal { get; set; }

    public virtual Producto Producto { get; set; } = null!;

    public virtual Venta Venta { get; set; } = null!;
}
