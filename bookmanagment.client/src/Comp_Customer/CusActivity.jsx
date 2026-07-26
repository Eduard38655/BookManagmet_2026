import { useEffect,useState } from "react";
import style from "../Styles/Cliente.module.css"

function CusActivity({ DataInfo, SetDataInfo }) {


    useEffect(() => {
        let FilterInfo = DataInfo.map((e) => {
            console.log(e.orders,"ss")

        })
     
        console.log(DataInfo )
    }, [DataInfo])

  return (
      <>
         
          <table style={{ width:"70%" }} >
              <thead>
                  <tr>
                      <th>Número de Orden</th>
                      <th>Fecha</th>
                      <th>Total</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                  </tr>
              </thead>

              <tbody>

                  {DataInfo.map((cliente) =>
                      cliente.orders.map((order) => (
                          <tr key={order.id}>
                              <td>{order.orderNumber}</td>
                              <td>{order.createdAt}</td>
                              <td>{order.total}</td>
                              <td>{order.paymentStatus}</td>
                              <td>
                                  <button>
                                      <i className="fa-solid fa-eye"></i>
                                  </button>
                              </td>
                          </tr>
                      ))
                  )}

              </tbody>
          </table>

      </>

      
  );
}

export default CusActivity;