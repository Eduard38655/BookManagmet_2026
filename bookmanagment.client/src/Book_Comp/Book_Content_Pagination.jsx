import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Book_Content_Pagination({ BackUp_Book = [], SetBook_Data }) {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(BackUp_Book.length / itemsPerPage);

    useEffect(() => {
        if (!Array.isArray(BackUp_Book)) return;
        if (typeof SetBook_Data !== "function") return;

        setCurrentPage(0);
        SetBook_Data(BackUp_Book.slice(0, itemsPerPage));
    }, [BackUp_Book, SetBook_Data]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);

        const start = selected * itemsPerPage;
        const end = start + itemsPerPage;

        SetBook_Data(BackUp_Book.slice(start, end));
    };

    if (!Array.isArray(BackUp_Book) || BackUp_Book.length <= itemsPerPage) {
        return null;
    }

    return (
        <ReactPaginate
            previousLabel="←"
            nextLabel="→"
            breakLabel="..."
            pageCount={totalPages}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
            forcePage={currentPage}
        />
    );
}

export default Book_Content_Pagination;