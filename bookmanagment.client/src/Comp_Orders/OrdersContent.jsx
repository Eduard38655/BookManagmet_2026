
import { useState, useEffect } from "react";

import ButtonViewRecipe from "../Comp_Orders/ViewRecipeOrder"
import style from "../Styles/DashboardPage.module.css"
function OrdersContent({ AllOrders, SetAllOrders }) {
  


 

    return (

        <>
           
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

                    {AllOrders.map((order, index) => (

                        <tr key={index}>

                            <td className={style.Container_Order_Number}>
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
                                <ButtonViewRecipe />

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

       
        </>

   
  );
}

export default OrdersContent;