import { useEffect,useState } from "react";
function OrderSummary({ cartData, setCartData }) {
    const [data, setData] = useState([]) 

    //Hacer los calcculos de subtotal, shipping y tax
    useEffect(() => {
        const data = [ ]
        
         
    }, [cartData])

  return (
      <>
      <h3>OrderSummary</h3>
          <ul>
              <li>Subtota {`(${cartData.length} items)` }  <span>$</span> </li>
              <li>Estimated Shipping <span></span> </li>
              <li>Estimated Tax <span></span> </li>
          </ul>

          <div>
          <label>Promo Code</label>

              <div>
                  <input type="text" />
                  <button>Apply</button>
              </div>

          </div>

          <label> total </label>
          <button>Proceed to Checkout <i className="fa-solid fa-arrow-right"></i> </button>


          <button><i className="fa-solid fa-arrow-left"></i> Continue Shopping </button>
      </>
  );
}

export default OrderSummary;