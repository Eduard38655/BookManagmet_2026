using System.ComponentModel.DataAnnotations;

namespace BookManagment.Server.Dto
{
    public class AddShoppingCartDto
    {

        public int BookId { get; set; }
        public int CustomerId { get; set; }
         
         public string CreatedAt { get; set; }
    }
}
