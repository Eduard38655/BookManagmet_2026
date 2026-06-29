import ShoppingCart from "../ShoppingCart/ShoppingCartContent"; 
import OrderSummary from "../ShoppingCart/OrderSummary";

import { useEffect, useState } from "react";  
function ShoppingPage() {
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        const GetAll_Books = async () => {
            const token = localStorage.getItem("User_Token") || "";

            try {
                const response = await fetch("http://localhost:5186/shopping/getall", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token ? { Authorization: `Bearer ${token}` } : {})
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: response.statusText }));
                    console.error("Error fetching cart:", errorData);
                    return;
                }

                const data = await response.json();
                setCartData(data.data) 
                console.log("Cart data:", data);
            } catch (error) {
                console.error("GetAll_Books error:", error);
            }
        };

        GetAll_Books();

    }, [])

    return (
        <>
            <ShoppingCart cartData={cartData} setCartData={setCartData} />
            <OrderSummary cartData={cartData} setCartData={setCartData} />
        </>
  );
}

export default ShoppingPage;