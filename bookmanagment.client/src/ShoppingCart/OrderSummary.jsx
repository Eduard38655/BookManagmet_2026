import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLock, faArrowRight

} from "@fortawesome/free-solid-svg-icons";

import style from "../Styles/Shopping.module.css"

function OrderSummary({ cartData, setCartData
}) {
    const [data, setData] = useState([]) 

    //Hacer los calcculos de subtotal, shipping y tax
    useEffect(() => {
        const data = [ ]
        
         
    }, [cartData])


    const [TotalResultado, SetResultadTotal] = useState([])
    /*
    useEffect(() => {
        const data = [{ total: 0, tax: 0,ship:0,promo:0,subtotal:0 }]
        const Total = cartData.map((b) => {
            data.push({

                subtotal: b.price * b.quant,
                ship: b.price * b.quant + 3,
                tax: (b.price * b.quant) * b.tax,
                total: ((b.price * b.quant) *5) + b.price * b.quant,
                promo:()


            })
        })



    }, [cartData])


    */
    return (
        <div className={style.DivOrderSummary }>
          <h3>OrderSummary</h3>


          <ul>
              <li>Subtotal {`(${cartData.length} items)` }  <span>$</span> </li>
              <li>Estimated Shipping <span>%5</span> </li>
              <li>Estimated Tax <span>%5</span> </li>
          </ul>


            <div className={style.DivTotal }>
              <label>Total</label>

              <span>$ { " "}80</span>
          </div>

            <div className={style.DivButton}>
          


                <input type="text" placeholder="Enter promo code" />
                  <button>Apply</button>
              

          </div>


            <div className={style.ContainerCheckOut }>

                <button className={style.ButtonCheckOut} >Proceed to Checkout <FontAwesomeIcon icon={faArrowRight} /> </button>


                <small className={style.DivText}> <FontAwesomeIcon icon={faLock} />Secure Checkout</small>

            </div>

        </div>
  );
}

export default OrderSummary;