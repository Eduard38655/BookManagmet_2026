import style from "../Styles/DashboardPage.module.css"

import { useEffect, useState } from "react";

function OverView({ Orders, SetOrders }) {

    const [OverView, SetoverView] = useState({});

    useEffect(() => {

        if (!Orders?.data) return;

        let ventas = 0;
        let low = 0;

        Orders.data.map((e) => {

            ventas = ventas + e.total;

            if (e.orderItems[0].book.stock < 10) {
                low++;
            }

        });


        SetoverView({
            total: ventas,
            stock: low,
            users: Orders.customer?.length || 0,

            ventas_icon: "fa-solid fa-money-bill-1",
            customer_icon: "fa-solid fa-user-group",
            low_stock_item: "fa-solid fa-triangle-exclamation"
        });


    }, [Orders]);


    useEffect(() => {
        console.log(OverView);
    }, [OverView]);


    return (
        <>

            <div>

                <div>
                    <label>Total Sales</label>
                    <i className={OverView.ventas_icon}></i>

                    <h2>
                        {OverView.total}
                    </h2>
                </div>

                <div>
                    <label>Customers</label>
                    <i className={OverView.customer_icon}></i>

                    <h2>
                        {OverView.users}
                    </h2>
                </div>

                <div>
                    <label>Low Stock</label>
                    <i className={OverView.low_stock_item}></i>

                    <h2>
                        {OverView.stock}
                    </h2>
                </div>

            </div>

        </>
    );
}

export default OverView;