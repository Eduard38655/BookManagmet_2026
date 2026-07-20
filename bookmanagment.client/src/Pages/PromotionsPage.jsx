import { useState, useEffect } from "react";
import PromotionsContent from "../Comp_Promotions/PromotionsContent"
import OverViewPromo from "../Comp_Promotions/PromoOverView"
import ManagPromo from "../Comp_Promotions/ManagePromo"
import EmpPagination from "../Comp_Empleados/EmpPagination";
import style from "../Styles/Promotion.module.css"
function PromotionsPage() {
    const [AllPromotions, SetAllPromotions] = useState([])
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {

        const FetchPromotions = async () => {

            const response = await fetch("http://localhost:5186/promos/getallpromotions");

            const data = await response.json();
            console.log(data.data,"ss")
            SetAllPromotions(data.data)
        }

        FetchPromotions()

    }, [])



    return (
        <article className={style.Container_Page_Emp}>

            <div className={style.Description_Page}>
                <div>
                    <h3>Promotions</h3>
                    <p>Edita,agrega, y elimina las promotiones</p>
                </div>

                
                <button>
                    <i className="fa-solid fa-circle-plus"></i>
                Agregar Promotion
                </button>
                 
            </div>

          <OverViewPromo />

            <div className={style.DivTable_Container}>
                <PromotionsContent AllPromotions={AllPromotions} SetAllPromotions={SetAllPromotions} />
                <EmpPagination currentItems={currentItems} setCurrentItems={setCurrentItems} AllEmployee={AllPromotions} />

            </div>
      </article>
  );
}

export default PromotionsPage;


 