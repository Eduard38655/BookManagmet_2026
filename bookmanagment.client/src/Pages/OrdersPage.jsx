
import { useState, useEffect } from "react";
 
import OrdersContent from "../Comp_Orders/OrdersContent";
import FilterOrders from "../Comp_Orders/FilterOrders"
import OrdersOverView from "../Comp_Orders/OrdersOverView"



function OrdersPage() {
    const [AllOrders, SetAllOrders] = useState([])


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
        <>

            <OrdersOverView AllOrders={AllOrders} SetAllOrders={SetAllOrders} />
            <FilterOrders AllOrders={AllOrders} SetAllOrders={SetAllOrders} />
            <OrdersContent AllOrders={AllOrders} SetAllOrders={SetAllOrders} />
        </>


   
  );
}

export default OrdersPage;