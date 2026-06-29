using BookManagment.Server.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookManagment.Server.Dto
{
    public class AddShoppingCartDto
    {

        public int Id { get; set; }
        
        public int CartId { get; set; }
    
        public int BookId { get; set; }

        public int Quantity { get; set; }
         
        public decimal UnitPrice { get; set; }

        public int CustomerId { get; set; }


    }
}
