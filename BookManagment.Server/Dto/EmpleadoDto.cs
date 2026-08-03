namespace BookManagment.Server.Dto;

public class EmpleadoDto
{
    public int Id { get; set; }


    public required string full_name { get; set; }

    public required string email { get; set; }



    public required string password_hash { get; set; }



    public int roleid { get; set; }



    public required string avatar_url { get; set; }


    public required string status { get; set; }


    public required string phone { get; set; }


    public required string position { get; set; }


    public decimal salary { get; set; }





}
