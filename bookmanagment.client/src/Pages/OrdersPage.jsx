
import { useState, useEffect } from "react";
 
import OrdersContent from "../Comp_Orders/OrdersContent";
import FilterOrders from "../Comp_Orders/FilterOrders"
import OrdersOverView from "../Comp_Orders/OrdersOverView"
import EmpPagination from "../Comp_Empleados/EmpPagination";
import style from "../Styles/Orders.module.css"
 function OrdersPage() {
    const [AllOrders, SetAllOrders] = useState([])
    const [AllEmployee, SetAllEmployee] = useState([])
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        const FetchOrders = async () => {

            const response = await fetch("http://localhost:5186/salesoverview/orders");
            const data = await response.json();
            console.log(data)
            SetAllOrders(data.data)

        }

        FetchOrders()

    }, [])


    return (
        <article className={style.MainContainerSection_Page}>

            <OrdersOverView AllOrders={AllOrders} SetAllOrders={SetAllOrders} />
            <FilterOrders AllOrders={AllOrders} SetAllOrders={SetAllOrders} />
            <div className={style.DivTable_Container}>
                <OrdersContent AllOrders={AllOrders} SetAllOrders={SetAllOrders} />
                <EmpPagination currentItems={currentItems} setCurrentItems={setCurrentItems} AllEmployee={AllEmployee} />

            </div>
        </article>


   
  );
}

export default OrdersPage;