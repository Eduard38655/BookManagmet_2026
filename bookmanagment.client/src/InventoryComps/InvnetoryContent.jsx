function InvnetoryContent({ Book_Data, SetBook_Data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" title="Select All" /></th>
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
                {Book_Data.map((book) => (
                    <tr key={book.id}>
                        <td>
                            <img
                                src={book.coverImageUrl}
                                alt={book.title}
                                width="40"
                            />
                            {" "}{book.title} - {book.author}
                        </td>

                        <td>{book.isbn}</td>
                        <td>{book.category}</td>
                        <td>{book.stock}</td>
                        <td>{book.price}</td>
                        <td>{book.status}</td>
                        <td>
                            <button><i className="fa-solid fa-pen"></i></button>
                            <button><i className="fa-regular fa-trash-can"></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default InvnetoryContent;