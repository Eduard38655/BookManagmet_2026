import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
function BookContent({ Book_Data, SetBook_Data }) {

    const navigate = useNavigate()
  return (
      <div>
          <div>
              <h3>Browse Catalog</h3>

              <div>
                  <small>Sort by:</small>
                  <select>

                  <option>Relevance</option>
                  </select>
              </div>
          </div>

      
          <div>

              {Book_Data.map((book) => (

                  <div key={book.id} onClick={() => navigate(`/browse/${book.id}`) }>



                      <img src={"https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg" || book.coverImageUrl} alt="image_cover" />




                      <div>
                          <small>{book.category}</small>
                          <h4>{book.title}</h4>
                          <p>{book.author}</p>
                          <div>
                              <p> {book.price}</p>
                              <button><i className="fa-solid fa-bag-shopping"></i></button>
                          </div>
                      </div>


                  </div>


              ))}


          </div>



      </div>
  );
}

export default BookContent;