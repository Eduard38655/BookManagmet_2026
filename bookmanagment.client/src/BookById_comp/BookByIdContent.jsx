
function BookByIdContent({ Book_Data, SetBook_Data }) {
  return (
      <>
          {Book_Data.map((book) => (

              <div key={book.id}  >



                  <img src={"https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg" || book.coverImageUrl} alt="image_cover" />




                  <div>

                      <div>
                          <h4>{book.title}</h4>
                          <p><span>by</span>{book.author}</p>
                      </div>


                     <div></div>
                      
                     

                      <div>
                          <h4> {book.price}</h4>
                          <div>
                              <span>{book.status}</span>
                              <small>{book.isbn }</small>
                          </div>
                      </div>



                      <div>
                          <p><span>{book.category} </span></p>
                          <p>{book.category}</p>
                          <p>{book.description }</p>
                          <div>

                              <button><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                              <button><i className="fa-regular fa-heart"></i>Add to Wishlist</button>
                          </div>
                      </div>


 


                  </div>


              </div>


          ))}

      </>
  );
}

export default BookByIdContent;