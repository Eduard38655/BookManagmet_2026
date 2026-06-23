import { useEffect, useState } from "react";


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
        <aside>

            <div>
                <label>Filters</label>

                <div>
                    <div>

                        <label>Category</label>

                        <div>
                            {category.map((c, index) => (

                                <div key={index}>

                                    <label >{c}</label>
                                    <input type="checkbox" onChange={() => Search_category(c)} />
                                </div>
                            ))}

                        </div>

                    
                    </div>

                    <div>

                        <label>Price Range</label>
                      
                        <div>
                            <input type="price" placeholder="Min" onChange={(e) => Buscar_precio({ min: e.target.value})} />
                            <input type="price" placeholder="Max" onChange={(e) => Buscar_precio({ max: e.target.value })} />
                        </div>
                    </div>



                    <div>

                        <label>Format</label>

                         

                            <div>
                                {format_book.map((f, index) => (

                                    <div key={index}>

                                        <label  >{f}</label>
                                        <input type="checkbox" onChange={() => Search_format(f)} />
                                    </div>
                                ))}

                            </div>
                    </div>
                </div>
                <button onClick={()=>clear_filter() }>Clear Filter</button>
            </div>

        </aside>
  );
}

export default FilterBook;