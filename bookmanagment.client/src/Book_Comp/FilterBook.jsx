import { useEffect, useState } from "react";

import style from "../Styles/BookPage.module.css"
function FilterBook({ BackUp_Book, SetBackUp_Data, SetBook_Data }) {
    const [category, SetCategory] = useState([])
    const [format_book, SetFormat] = useState([])
    const [selected_category, SetSelected_Category] = useState([])
    const [selected_format, Setselected_format] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        const categories = [];
        const formats=[]

        BackUp_Book.forEach(book => {
            if (!formats.includes(book.format)) {
                formats.push(book.format);
            }




            if (!categories.includes(book.category)) {
                categories.push(book.category);
            }
        });


            



        SetCategory(categories);
        SetFormat(formats)
      
    }, [BackUp_Book]);


    function Search_category(choose_category) {
        const details = []
        const data = BackUp_Book.map((e) => {
            return e.category == choose_category ? details.push(e) : "not found"
     
           
        })
 

        setFilter((prev) => [...prev, ...details])
    }

    function Search_format(choose_format) {
        const details = []
        const data = BackUp_Book.map((e) => {
            return e.format == choose_format ? details.push(e) : "not found"


        })


        setFilter((prev) => [...prev, ...details])
    }



    function clear_filter() {
        SetBook_Data(BackUp_Book)
    }

    useEffect(() => {
        console.log(filter)

        SetBook_Data(filter)

    }, [filter])



    function Buscar_precio(valor) {
        const min = valor.min
        const max = valor.max
        const values_filtres = BackUp_Book.filter((e) => e.precio >= max || e.precio >= min)

        setFilter(values_filtres)

    }


   

    return (
        <aside className={style.Aside_Filter_Container }>

            <div className={style.Aside_Content}>
                <div className={style.Car_filters }>
                    <h5>Filters</h5>

                    <div className={style.Container_Filter_op}> 

                        <div className={style.Container_Optiones}>

                            <label>Category</label>

                           
                                {category.map((c, index) => (

                                    <div key={index} className={style.Div_Content_op }>

                                        <input type="checkbox" onChange={() => Search_category(c)} />
                                        {" " }
                                        <label >{c}</label>
                                    </div>
                                ))}

                       


                        </div>

                        <div className={style.Container_Optiones}>

                            <label>Price Range</label>

                            <div className={style.Div_Price }>
                                <input type="price" placeholder="Min" onChange={(e) => Buscar_precio({ min: e.target.value })} />
                                { " - " }
                                <input type="price" placeholder="Max" onChange={(e) => Buscar_precio({ max: e.target.value })} />
                            </div>
                        </div>



                        <div className={style.Container_Optiones}>

                            <label>Format</label>



                          
                                {format_book.map((f, index) => (

                                    <div key={index} className={style.Div_Content_op}>

                                        <input type="checkbox" onChange={() => Search_format(f)} /> {" " }
                                        <label  >{f}</label>
                                    </div>
                                ))}

                          
                        </div>
                    </div>
                    <button onClick={() => clear_filter()}>Clear Filter</button>
                </div>

            </div>

        </aside>
  );
}

export default FilterBook;