using System;
using System.Collections.Generic;

namespace BookManagment.Server.Models;

public partial class DetalleCotizacione
{
    public int Id { get; set; }

    public int CotizacionId { get; set; }

    public int ProductoId { get; set; }

    public int Cantidad { get; set; }

    public decimal Precio { get; set; }

    public decimal Subtotal { get; set; }

    public virtual Cotizacione Cotizacion { get; set; } = null!;

    public virtual Producto Producto { get; set; } = null!;
}
