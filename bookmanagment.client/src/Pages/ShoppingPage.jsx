import ShoppingCart from "../ShoppingCart/ShoppingCartContent";
import OrderSummary from "../ShoppingCart/OrderSummary";
import style from "../Styles/Shopping.module.css";
import { useEffect, useState } from "react";

function ShoppingPage() {

    const [cartData, setCartData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    useEffect(() => {

        const getLocal = localStorage.getItem("selectedBooks");

        const parseLocal = JSON.parse(getLocal);

        setCartData(parseLocal || []);

    }, []);

    // Último elemento de la página
    const indexOfLastItem = currentPage * itemsPerPage;

    // Primer elemento de la página
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Elementos que se mostrarán
    const currentItems = cartData.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    // Cantidad total de páginas
    const totalPages = Math.ceil(
        cartData.length / itemsPerPage
    );

    return (
        <>
            <div className={style.DivTitle}>
                <h2>Your Cart</h2>
                <p>
                    Review your selections before proceeding to checkout
                </p>
            </div>

            <div className={style.SubContainer}>

                <ShoppingCart
                    cartData={currentItems}
                    setCartData={setCartData}
                />

                <OrderSummary
                    cartData={cartData}
                    setCartData={setCartData}
                />

            </div>

            <div className={style.DivPagination}>

                <button
                    disabled={currentPage === 1}
                     onClick={() => setCurrentPage(currentPage - 1)}
                >
                    {"<"}
                </button>

               

                <button
                    disabled={currentPage === totalPages}
                     onClick={() => setCurrentPage(currentPage + 1)}
                >
                    {">"}
                </button>

            </div>
        </>
    );
}

export default ShoppingPage;