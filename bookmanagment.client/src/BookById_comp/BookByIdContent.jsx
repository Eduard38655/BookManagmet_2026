
import style from "../Styles/BookPage.module.css"
function BookByIdContent({ Book_Data, SetBook_Data }) {


    function addItemShopping(BookId) {
        console.log(BookId)
        const token = localStorage.getItem("User_Token") || "";
        fetch("http://localhost:5186/shopping/add/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            },
            body: JSON.stringify({ BookId: BookId, Quantity: 1, UnitPrice: 500 })
        })
            .then((res) => {
                if (!res.ok) return res.text().then(t => Promise.reject({ status: res.status, body: t }));
                const ct = res.headers.get("content-type") || "";
                if (ct.includes("application/json")) return res.json();
                return res.text().then(t => ({ message: "No JSON response", text: t }));
            })
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.error("addItemShopping error:", err));
    }


  return (
      <div className={style.Container_Book_Details} >

          {Book_Data.map((book) => (

              <div key={book.id} className={style.Book_Details } >



                  <img src={"https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg" || book.coverImageUrl} alt="image_cover" />




                  <div className={style.Card_Content }>

                      <div className={style.Div_Title }>
                          <h4>{book.title}</h4>
                          <p><span>by</span> {" "} {book.author}</p>
                      </div>


                     
                      
                     

                      <div className={style.Div_Price }>
                          <h4>$ {book.price}</h4>
                          <div>
                              <p> <span><i className="fa-regular fa-circle-check"></i></span>  {book.status}</p>
                              <small>ISBN: {book.isbn }</small>
                          </div>
                      </div>
                      <div className={style.Line_Book}></div>


                      <div className={style.Div_Category} >
                          <div className={style.Container_Category}>
                              <p><span>{book.category} </span></p>

                          </div>
                          <br/>
                          <p className={style.Text_description }>{book.description}</p>
                         
                      </div>


 
                      <div className={style.Div_Buttons_Book_Details}>

                          <button onClick={() => addItemShopping(book.id)}><i className="fa-solid fa-cart-shopping"></i>{" "}Add to Cart</button>
                          <button><i className="fa-regular fa-heart"></i>{" "}Add to Wishlist</button>
                      </div>

                  </div>


              </div>


          ))}

      </div>
  );
}

export default BookByIdContent;