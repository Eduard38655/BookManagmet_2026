import React, { useEffect, useState } from "react";
function SalesPage() {
 
    const [salesDetails, SetAllSales] = useState([])

    useEffect(() => {
        const FetchOrders = async () => {

            const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://localhost:5186'}/salesdetails/getallsales`);
            const data = await response.json();
            console.log(data)
            SetAllSales(data.data)

        }

        FetchOrders()

    }, [])

    return (
    <p>Hello worldd!</p>
  );
}

export default SalesPage;