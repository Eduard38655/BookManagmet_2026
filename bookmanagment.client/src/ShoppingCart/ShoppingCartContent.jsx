
import { useEffect } from "react";
function ShoppingCartContent({ cartData, setCartData }) {

    

  return (
      <>
          {cartData.map((item,index) => (
          
              <>
                  <div key={index }>
                      <img src={item.coverImageUrl} />

                      <div>
                          <h3>{item.title}</h3>

                          <p>{item.name}</p>

                          <span>{item.format}</span>


                          <div>
                              <button>-</button>
                              <span>{item.quantity}</span>
                              <button>+</button>
                          </div>


                      </div>

                      <div>
                          <span>{item.price }</span>
                          <button> <i className="fa-regular fa-trash-can"></i>Remove Item</button>
                      </div>
                  </div>

              </>

          ))}

      </>
  );
}

export default ShoppingCartContent;
