import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import style from "../Styles/BookPage.module.css"
function BookContent({ Book_Data, SetBook_Data }) {

    const navigate = useNavigate()
  return (
      <article className={style.Container_Details_Book_Content}>

          <div className={style.Div_Filter_By}>
              <h3>Browse Catalog</h3>

              <div>
                  <small>Sort by:</small>
                  {" "}
                  <select>
                       
                  <option>Relevance</option>
                  </select>
              </div>
          </div>


          <div className={style.Container_Content }>

              {Book_Data.map((book) => (

                  <div key={book.id} onClick={() => navigate(`/browse/${book.id}`)} className={style.Book_Card }>

                      <img src={"https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg" || book.coverImageUrl} alt="image_cover" />
 
                      <div className={style.Content_Card}>
                          <div className={style.Div_Categories }>
                              <span>{book.category}</span>
                          </div>

                          <h4>{book.title}</h4>
                          <p>{book.author}</p>
 
                      </div>

                      <div className={style.Div_Buttons}>
                          <span> $ {book.price}</span>
                          <button><i className="fa-solid fa-bag-shopping"></i></button>
                      </div>
                  </div>


              ))}


          </div>



      </article>
  );
}

export default BookContent;