import { useFormContext } from "react-hook-form";
import style from "../Styles/Promotion.module.css"
import BannerPromo from "../Comp_Promotions/BannerPromo"

import { useEffect, useState } from "react";
function PromoCategoryMag({ categories }) {

    const {
        register,
        formState: { errors }
    } = useFormContext();

    const [categoryInfo, SetCategory] = useState([])
  
    useEffect(() => {

        if (!categories?.category) return;

        const categoriesBox = [];

        categories.category.forEach((book) => {

            if (!categoriesBox.includes(book.name)) {
                categoriesBox.push(book.name);
            }

        });

        SetCategory(categoriesBox);

    }, [categories]);



   return (


      <>

          <aside className={style.PromoCategory }>

               

               <div className={style.DivContainerCheckBox}>

                   <div className={style.DivCategoryButton}>
                       <button>
                           <i className="fa-solid fa-magnifying-glass"></i>
                       </button>
                       {" "}
                       <label>Applicar Categoría / Buscar Por libros</label>

                   </div>



                   <div
                       className={style.DivInputCheck}
                   >
                       {categoryInfo.map((ca) => (

                           <div key={ca} >
                               <input type="checkbox" />
                               <label >
                                   {ca}
                               </label>


                           </div>


                       ))}


                   </div>

               </div>
               < BannerPromo />

          </aside>

      </>
  );
}

export default PromoCategoryMag;