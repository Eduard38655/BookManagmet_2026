import { useState, useEffect} from "react";
 

function OrdersOverView({ AllOrders, SetAllOrders }) {
    const [Satatus_Orders, SetOrders] = useState([])  


    useEffect(() => {
        let data = []
        const counts = {
            shipped: 0,
            delivered: 0,
            pending: 0,
            paid:0
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
            else {
                counts.pending++;
            }
        }

        SetOrders(counts);
    }, [AllOrders])
 


  return (
      <>
          <div>
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


          </div>
          
      </>
  );
}

export default OrdersOverView;