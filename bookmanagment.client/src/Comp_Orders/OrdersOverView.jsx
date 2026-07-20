import { useState, useEffect } from "react";

import style from "../Styles/Orders.module.css"

function OrdersOverView({ AllOrders, SetAllOrders }) {
    const [Satatus_Orders, SetOrders] = useState([])  


    useEffect(() => {
        let data = []
        const counts = {
            shipped: 0,
            delivered: 0,
            pending: 0,
            paid: 0,
            canceled:0
        };

        const FilterStatus = AllOrders.map((order) => {
            data.push(order.status)
        })
        for (let i = 0; i < data.length; i++) {

            if (data[i] === "shipped") {
                counts.shipped++;
            }
            else if (data[i] === "delivered") {
                counts.delivered++;
            }

            else if (data[i] === "paid") {
                counts.paid++;
            }
            else if (data[i] === "canceled") {
                counts.canceled++;
            }
            else {
                counts.pending++;
            }


            
        }

        SetOrders(counts);
    }, [AllOrders])
 


  return (
      <>
          <div className={style.DivContainer_Orders }>
              <div>
                  <label>Delivered</label>
                  <span>{Satatus_Orders.delivered}</span>
              </div>

              <div>
                  <label>Paid</label>
                  <span>{Satatus_Orders.paid}</span>
              </div>

              <div>
                  <label>shipped</label>
                  <span>{Satatus_Orders.shipped}</span>
              </div>

              <div>
                  <label>Pending</label>
                  <span>{Satatus_Orders.pending}</span>
              </div>

              <div>
                  <label>Cancelada</label>
                  <span>{Satatus_Orders.canceled}</span>
              </div>


          </div>
          
      </>
  );
}

export default OrdersOverView;