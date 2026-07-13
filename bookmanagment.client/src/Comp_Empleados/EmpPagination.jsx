

import EmpleadosContent from "../Comp_Empleados/EmpleadosContent";
import { useEffect, useState } from "react";
import style from "../Styles/Empleados.module.css"
function EmpPagination({ AllEmployee,  currentItems, setCurrentItems }) {
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
   
 
    useEffect(() => {EmpPagination
        const totalPages = Math.max(1, Math.ceil(AllEmployee.length / itemsPerPage));
        const correctedPage = currentPage > totalPages - 1 ? 0 : currentPage;

        if (correctedPage !== currentPage) {
            setCurrentPage(correctedPage);
            return;
        }

        const start = correctedPage * itemsPerPage;
        const end = start + itemsPerPage;
        setCurrentItems(AllEmployee.slice(start, end));
        setPageCount(totalPages);
    }, [currentPage, itemsPerPage, AllEmployee]);

    const goToPage = (page) => {
        if (page < 0 || page > pageCount - 1) return;
        setCurrentPage(page);
    };

    return (
        <div className={style.DivPagination_Container} >
            
                <span>Mostrando {currentItems.length} a {pageCount} de {AllEmployee.length} Empleados  </span>

            
            <div className={style.paginationContainer}>
                <button
                    className={style.pageLink_button}
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                {Array.from({ length: pageCount }, (_, i) => (
                    <button
                        key={i}
                        className={
                            i === currentPage
                                ? `${style.inactivePage} ${style.activePage}`
                                : style.pageLink
                        }
                        onClick={() => goToPage(i)}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    className={style.pageLink_button}
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === pageCount - 1}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </ div>
    );
}

export default EmpPagination;