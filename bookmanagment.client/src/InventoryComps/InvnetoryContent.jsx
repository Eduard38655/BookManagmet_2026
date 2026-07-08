import { useState, useEffect } from "react";
import { ReactPaginate } from "react-paginate";
import style from "../Styles/Inv.module.css";

function InvnetoryContent({ Book_Data }) {
    const itemsPerPage = 12;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(Book_Data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(Book_Data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, Book_Data]);

    // Si Book_Data cambia (filtro/búsqueda) y el offset actual quedó fuera de rango,
    // lo reseteamos a 0 para evitar una tabla vacía.
    useEffect(() => {
        const maxOffset = Math.max(0, (Math.ceil(Book_Data.length / itemsPerPage) - 1) * itemsPerPage);
        if (itemOffset > maxOffset) {
            setItemOffset(0);
        }
    }, [Book_Data, itemsPerPage, itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    return (
        <>
            <table>
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
                                {" "}
                                {book.title} - {book.author}
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
                                <button>
                                    <i className="fa-solid fa-pen"></i>
                                </button>

                                <button>
                                    <i className="fa-regular fa-trash-can"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {pageCount > 1 && (
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Siguiente >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="< Anterior"
                        containerClassName="pagination"
                        activeClassName="active"
                        forcePage={Math.floor(itemOffset / itemsPerPage)}
                    />
                </div>
            )}
        </>
    );
}

export default InvnetoryContent;