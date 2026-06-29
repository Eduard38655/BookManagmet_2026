import { useEffect } from "react";

function DasboardContent({ Orders, SetOrders }) {


    if (!Orders?.data) return null;
 

    return (
        <div>

            <label>Recent Orders</label>

            <table>

                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>


                <tbody>

                    {Orders.data.map((order, index) => (

                        <tr key={index}>

                            <td>
                                {order.orderNumber}
                            </td>

                            <td>
                                {order.customer?.user?.fullName}
                            </td>

                            <td>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>

                            <td>
                                {order.paymentStatus}
                            </td>

                            <td>
                                {order.total}
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