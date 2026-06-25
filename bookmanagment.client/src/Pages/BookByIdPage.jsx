import { useState, useEffect } from "react"
import BookByIdContent from "../BookById_comp/BookByIdContent"
import { useParams } from "react-router-dom";
import AutorInfo from "../BookById_comp/AutorInfo"
import Reviews_Customer from "../BookById_comp/Reviews"
function BookByIdPage() {
    const { BookId } = useParams();
    const [Book_Data, SetBook_Data] = useState([])
    const [BackUp_Book, SetBackUp_Data] = useState([])
    
    useEffect(() => {
        const id = Number(BookId)
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5186/product/findbyid/${id}` )
            const data_products = await response.json()

            console.log(data_products.data,id)
            if (data_products.success) {
                SetBook_Data([data_products.data])
                SetBackUp_Data([data_products.data])
                return
            }


        }
        fetchData()

    }, []) 
  return (
      <>
          <BookByIdContent Book_Data={Book_Data} SetBook_Data={SetBook_Data } />
          <AutorInfo Book_Data={Book_Data} SetBook_Data={SetBook_Data} />
          <Reviews_Customer Book_Data={Book_Data} SetBook_Data={SetBook_Data} />
      </>
  );
}

export default BookByIdPage;