import { useEffect, useState } from "react";
import style from "../Styles/DashboardPage.module.css"
import DasboardContent from "../DashboardComps/DasboardContent"
import SalesCards from "../DashboardComps/OverView"
function dashboardPage() {
    const [Orders, SetOrders] = useState([])


    useEffect(() => {
        const GetAll_Books = async () => {
            const token = localStorage.getItem("User_Token") || "";

            try {
                const response = await fetch("http://localhost:5186/salesoverview/orders", {
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
                SetOrders(data )
                console.log("Cart data:", data);
            } catch (error) {
                console.error("GetAll_Books error:", error);
            }
        };

        GetAll_Books();

    }, [])
    return (
        <>
            <div className={style.DashboardPage_Container}>
                <div className={style.DashboardPage_Tittle}>
                    <h2>Dashboard Overview</h2>
                    <p>Monitor your bookstore's daily performance, track recent shipments, and review inventory alerts</p>
                </div>

                <div className={style.DashboardPage_Calendar}>
                    <input type="calendar" />
                </div>

            </div>

            <SalesCards Orders={Orders} SetOrders={SetOrders} />
            <DasboardContent Orders={Orders} SetOrders={SetOrders} />
        </>

  );
}

export default dashboardPage;