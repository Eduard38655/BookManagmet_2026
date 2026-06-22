import { useEffect, useState} from "react"
 
function BookContent() {
    const [Book_Data, SetBook_Data] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("product/get")
            const data_products = await response.json()

            console.log(data_products.data)
            if (data_products.success) {
                SetBook_Data(data_products.data)
                return
            }


        }
        fetchData()

    }, []) 
  return (
      <>



          {Book_Data.map((book) => (

              <div key={book.id }>


                  {book.price}
                  {book.title }




              </div>
             

          ))}



      </>
  );
}

export default BookContent;