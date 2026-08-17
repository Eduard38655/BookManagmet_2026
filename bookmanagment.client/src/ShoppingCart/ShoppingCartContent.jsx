

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faTrashCan
} from "@fortawesome/free-solid-svg-icons";

import style from "../Styles/Shopping.module.css"

function ShoppingCartContent({ cartData, setCartData }) {

    function AgregarProducto(BookId) {

  

        let info = cartData.map((b) => {

            return b.id == BookId ? { ...b, quant: b.quant+1 } : b

        })

        localStorage.setItem("selectedBooks", JSON.stringify(info))

setCartData(info )
    }




    function EliminarProducto(BookId) {

        console.log("ss")

        let info = cartData.map((b) => {

            return b.id == BookId ? { ...b, quant: b.quant - 1 } : b

        }).filter((b) => b.quant != 0)


        localStorage.setItem("selectedBooks", JSON.stringify(info))

        setCartData(info)
    }


    function EliminarItem(BookId) {

        let info = cartData.filter((b) => b.id != BookId)


        localStorage.setItem("selectedBooks", JSON.stringify(info))

        setCartData(info)


    }



    return (
        <div className={style.Container_Producto }>
         

          {cartData.length > 0 && cartData ? <>


              {cartData.map((item, index) => (

                   
                      <div key={item.id} className={style.DivCard }>
                          <img src={item.coverImageUrl} />

                          <div className={style.DivContent }>
                              <div className={style.DivTitle_Card }>

                                  <h3>{item.title}</h3>

                                  <p>{item.author}</p>


                                  <span>${" "} {(item.price * item.quant).toFixed(2)}</span>
                              </div>

                              <div className={style.ContainerButtons }>
                                  <div>
                                      <button onClick={() => EliminarProducto(item.id)}  >-</button>
                                      {" "}
                                      <span>{item.quant}</span>
                                      {" "}
                                      <button onClick={() => AgregarProducto(item.id)} >+</button>


                                  </div>
                                  <button className={style.ButtonDelete} onClick={() => EliminarItem(item.id)}  >  <FontAwesomeIcon icon={faTrashCan} />{ " "}Remove Item</button>

                              </div>


                          </div>

                           
                      </div>

                  

              ))}




          </> : <p>No hay Datos </p>}
           
      </div>
  );
}

export default ShoppingCartContent;
