import { useState, useEffect } from "react"
import BookByIdContent from "../BookById_comp/BookByIdContent"
function BookByIdPage() {

    const [Book_Data, SetBook_Data] = useState([])
    const [BackUp_Book, SetBackUp_Data] = useState([])

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
      <>
          <BookByIdContent Book_Data={Book_Data} SetBook_Data={SetBook_Data } />

      </>
  );
}

export default BookByIdPage;