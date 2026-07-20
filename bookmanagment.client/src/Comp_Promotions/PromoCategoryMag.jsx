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

    const [details, setDetails] = useState([])


    useEffect(() => {

        if (!categoryInfo.length) return;

        const selectedCategories = categories.data?.books?.map(
            book => book.category?.name
        ) || [];

        const data = categoryInfo.map(category => ({
            nombre: category,
            check: selectedCategories.includes(category)
        }));

        setDetails(data);

    }, [categoryInfo, categories]);
 

  /*Actualizar estado de checkBox*/
    function Update(nombre) {
        const BoxFiltered= []

        const UpdateStatus = details.map((c) => {

            return c.nombre == nombre ? BoxFiltered.push({ nombre: c.nombre, check: c.check == true ? false : true }) : BoxFiltered.push(c)

        })
        setDetails(BoxFiltered)
    }


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
                       {details.map((ca,index) => (

                           <div key={index} >
                               <input type="checkbox" checked={ca.check} value={ca.nombre} onChange={(e) => { Update(e.target.value) }} />
                               <label >
                                   {ca.nombre}
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