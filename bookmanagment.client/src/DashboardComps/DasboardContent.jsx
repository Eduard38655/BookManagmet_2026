import { useEffect } from "react";
import style from "../Styles/DashboardPage.module.css"

function DasboardContent({ Orders, SetOrders }) {


    if (!Orders?.data) return null;


    return (
        <div className={style.Container_Table}>

            <div className={style.Table_tittle}>
                <label>Recent Orders</label>
                
            </div>
            


            <table>

                <thead className={style.Container_thead}>
                    <tr>
                        <th>ORDER ID</th>
                        <th>CUSTOMER</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>TOTAL</th>
                        <th>ACTION</th>
                    </tr>

                </thead>
                <tbody>

                    {Orders.data.map((order, index) => (

                        <tr key={index}>

                            <td className={ style.Container_Order_Number}>
                                #{order.orderNumber}
                            </td>

                            <td>
                                {order.customer?.user?.fullName}
                            </td>

                            <td>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>

                            <td>
                                <span className={`${style.badge} ${style[order.paymentStatus?.toLowerCase()] || ''}`}>
                                    {order.paymentStatus}
                                </span>
                            </td>

                            <td>
                                <strong>${order.total}</strong>
                            </td>

                            <td>
                                ...
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default DasboardContent;