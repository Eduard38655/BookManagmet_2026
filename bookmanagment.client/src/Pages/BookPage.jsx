import { useState, useEffect } from "react"
import BookContent from "../Book_Comp/BookContent"
import FilterBook from "../Book_Comp/FilterBook"
import Book_Content_Pagination from "../Book_Comp/Book_Content_Pagination"
import style from "../Styles/BookPage.module.css"
function BookPage() {


    const [Book_Data, SetBook_Data] = useState([])
    const [BackUp_Book, SetBackUp_Data] = useState([])
    const [currentItems, setCurrentItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("product/get")
            const data_products = await response.json()

            console.log(data_products.data)
            if (data_products.success) {
                SetBook_Data(data_products.data)
                SetBackUp_Data(data_products.data)
                return
            }


        }
        fetchData()

    }, []) 
    return (

        <article className={style.Main_Container_Book_Page}  >
            <FilterBook BackUp_Book={BackUp_Book}    currentItems={currentItems} setCurrentItems={setCurrentItems} />
            <BookContent BackUp_Book={BackUp_Book} SetBook_Data={SetBook_Data} setCurrentItems={setCurrentItems} currentItems={currentItems} />
        </article>
             
      
  );
}

export default BookPage;