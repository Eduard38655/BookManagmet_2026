import { useState, useEffect } from "react";
import style from "../Styles/Inv.module.css";
import { useNavigate } from "react-router-dom" 
 
function InventoryContent({ Book_Data, SetBook_Data, SetDialog }) {
    const itemsPerPage = 5;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate()
    // Un solo efecto: corrige la página si Book_Data cambió y la página
    // quedó fuera de rango, y luego arma currentItems a partir de Book_Data.
   


    useEffect(() => {
        const totalPages = Math.max(1, Math.ceil(Book_Data.length / itemsPerPage));
        const correctedPage = currentPage > totalPages - 1 ? 0 : currentPage;

        if (correctedPage !== currentPage) {
            setCurrentPage(correctedPage);
            return;
        }

        const start = correctedPage * itemsPerPage;
        const end = start + itemsPerPage;
        setCurrentItems(Book_Data.slice(start, end));
        setPageCount(totalPages);
    }, [currentPage, itemsPerPage, Book_Data]);

    const goToPage = (page) => {
        if (page < 0 || page > pageCount - 1) return;
        setCurrentPage(page);
    };

    return (
        <>
            <table className={style.DivInvTable }>
                <thead>
                    <tr>
                        <th>Titulo/Autor</th>
                        <th>ISBN</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((book) => (
                        <tr key={book.id}>
                            <td>
                                <img
                                    src={
                                        book.coverImageUrl ||
                                        "https://static.wikia.nocookie.net/harrypotter/images/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%93_Bloomsbury_2014_Children%27s_Edition_%28Paperback_and_Hardcover%29.jpg/revision/latest?cb=20170109041611"
                                    }
                                    alt={book.title}
                                    width="40"
                                />
                                <span> {book.title} <br />  <small> {book.author}</small></span>
                                
                            </td>

                            <td>{book.isbn}</td>
                            <td>{book.category}</td>
                            <td>{book.stock}</td>
                            <td>${book.price}</td>

                            <td>
                                <span
                                    className={
                                        book.status === "active"
                                            ? style.active
                                            : style.inactive
                                    }
                                >
                                    {book.status}
                                </span>
                            </td>

                            <td>
                                <button onClick={() => { SetDialog(true) } } >
                                    <i className="fa-solid fa-pen"></i>
                                </button>

                                {"  "}
                                <button>
                                    <i className="fa-regular fa-trash-can"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
                
            
        </>
    );
}

export default InventoryContent;