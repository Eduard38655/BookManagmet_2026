import { useState, useEffect } from "react"
import BookByIdContent from "../BookById_comp/BookByIdContent"
import { useParams } from "react-router-dom";
function BookByIdPage() {
    const { BookId } = useParams();
    const [Book_Data, SetBook_Data] = useState([])
    const [BackUp_Book, SetBackUp_Data] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5186/product/findbyid", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ BookId })
            })
            const data_products = await response.json()

            console.log(data_products )
            if (data_products.success) {
                SetBook_Data(data_products.data)
                SetBackUp_Data(data_products.data)
                return
            }


        }
        fetchData()

    }, []) 
  return (
      <>
          <BookByIdContent Book_Data={Book_Data} SetBook_Data={SetBook_Data } />

      </>
  );
}

export default BookByIdPage;