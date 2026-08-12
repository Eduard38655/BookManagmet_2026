import { useEffect, useState } from "react";

import style from "../Styles/BookPage.module.css"
function FilterBook({ BackUp_Book,    currentItems, setCurrentItems }) {
    const [category, SetCategory] = useState([])
    const [format_book, SetFormat] = useState([])
 

 
    const [selectedFormat, setSelectedFormat] = useState([])
  
    useEffect(() => {
        let categories = [];
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

   

    const [seleted, SetSelected] = useState([])
    function Search_category(choose_category, isChecked) {

        let newSelected;

        if (isChecked) {
            newSelected = [...seleted, choose_category];
        } else {
            newSelected = seleted.filter(
                c => c !== choose_category
            );
        }

        SetSelected(newSelected);

        if (newSelected.length === 0) {
            setCurrentItems(BackUp_Book);
            return;
        }

        const details = BackUp_Book.filter(book =>
            newSelected.includes(book.category)
        );

        setCurrentItems(details);

     }


    
    
    function Search_format(choose_format, isChecked) {
        let chosenFormats;

  

        if(isChecked) {
            chosenFormats = [...selectedFormat, choose_format];
        } else {
            chosenFormats = selectedFormat.filter(f => f !== choose_format);
        }

        setSelectedFormat(chosenFormats);


        if (currentItems.length === 0) {
            setCurrentItems(BackUp_Book);
            return;
        }
        
        const details = BackUp_Book.filter(book =>
            chosenFormats.includes(book.format)
        );
 

        setCurrentItems(details)

    }



    function clear_filter() {
        let checkBox = document.getElementsByTagName("input")

        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].type === "checkbox") {
                checkBox[i].checked = false
            }
        }
        setCurrentItems(BackUp_Book)
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

                                        <input type="checkbox" value={c} onChange={(e)=>Search_category(c,e.target.checked)} />
                                        {" " }
                                        <label >{c}</label>
                                    </div>
                                ))}

                       


                        </div>
 



                        <div className={style.Container_Optiones}>

                            <label>Format</label>



                          
                                {format_book.map((f, index) => (

                                    <div key={index} className={style.Div_Content_op}>

                                        <input type="checkbox" onChange={(e) => Search_format(f, e.target.checked)} /> {" "}
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