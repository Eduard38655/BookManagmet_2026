import { useNavigate } from "react-router-dom";
import style from "../Styles/BookPage.module.css"
import EmpPagination from "../Comp_Empleados/EmpPagination";
import { useEffect, useState } from "react";
function BookContent({ currentItems, setCurrentItems, BackUp_Book }) {

    const navigate = useNavigate()
    const [selected, SetSelected] = useState([])
    function FindRelavance(value) {
        const ResetData = [...BackUp_Book];

        if (value === "az") {
            ResetData.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        if (value === "za") {
            ResetData.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
        }

        setCurrentItems(ResetData);
    }

    function FilterByName(value) {
        const filtered = BackUp_Book.filter(book =>
            book.title.toLowerCase().includes(value.toLowerCase())
        );
        setCurrentItems(filtered)
    }


    useEffect(() => {

        console.log(selected)

    }, [selected])



    return (
        <>
            <article className={style.Container_Details_Book_Content}>

                <div className={style.Div_Filter_By}>

                    <div className={style.Div_Search}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search books..." onChange={(e) => {
                            FilterByName(e.target.value)
                        }} />
                    </div>

                    {currentItems.length > 0 && <>
                        <div>
                            <small>Sort by:</small>
                            {" "}
                            <select onChange={(e) => {
                                FindRelavance(e.target.value)
                            }}>
                                <option value="all">Relevance</option>
                                <option value="az">A - Z</option>
                                <option value="za">Z - A</option>
                            </select>
                        </div>
                    </>}

                </div>

                {currentItems && currentItems.length > 0 ? <>
                    <div className={style.Container_Content}>
                        {currentItems.map((book) => (
                            <div key={book.id} className={style.Book_Card}>

                                <img
                                    onClick={() => navigate(`/browse/${book.id}`)}
                                    src={book.coverImageUrl}
                                    alt="image_cover"
                                />

                                <div className={style.Content_Card}>
                                    <div className={style.Div_Categories}>
                                        <span>{book.category}</span>
                                    </div>

                                    <h4>{book.title}</h4>
                                    <p>{book.author}</p>
                                </div>

                                <div className={style.Div_Buttons}>
                                    <span> $ {book.price}</span>
                                    <button onClick={() => {
                                        SetSelected((prev)=>[...prev, book.id])
                                    }} >
                                        {selected.includes(book.id) ? <>
                                           
                                            <i className="fa-regular fa-circle-check"></i>
                                        </> : <>
                                            <i className="fa-solid fa-bag-shopping"></i>
                                        </>}
                                     

                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </> : (
                    <div className={style.NotFoundItems}>
                        <i className="fa-solid fa-cubes"></i>
                        No hay datos
                    </div>
                )}

                <EmpPagination currentItems={currentItems} setCurrentItems={setCurrentItems} AllEmployee={BackUp_Book} />

            </article>
        </>
    );
}

export default BookContent;