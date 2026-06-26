

import style from "../Styles/BookPage.module.css"

function AutorInfo({ Book_Data, SetBook_Data }) {
    return (
        <div className={style.Container_Author }>
            {Book_Data.map((book) => (

                <div key={book.id} className={style.Div_Card }  >

                    <img src={"https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg" || book.imageUrl} alt="image_cover" />

                    <div className={style.AutorInfo }>
                            <h4>{book.author}</h4>
                            <p> {book.bio}</p>
                        </div>

                </div>


            ))}

        </div>
    );
}

export default AutorInfo