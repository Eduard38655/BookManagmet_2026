using System;

namespace BookManagment.Server.Dto;

public class CartItemResponseDto
{
    public int Id { get; set; }
    public int CartId { get; set; }
    public int BookId { get; set; }
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
}
