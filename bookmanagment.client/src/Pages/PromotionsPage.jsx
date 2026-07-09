import { useState, useEffect } from "react";
import PromotionsContent from "../Comp_Promotions/PromotionsContent"
function PromotionsPage() {
    const [AllPromotions, SetAllPromotions] = useState([])

    useEffect(() => {

        const FetchPromotions = async () => {

            const response = await fetch("http://localhost:5186/promos/getallpromotions");

            const data = await response.json();
            console.log(data.data,"ss")
            SetAllPromotions(data.data)
        }

        FetchPromotions()

    }, [])



  return (
      <>
      <h2>sss</h2>
          
              
          <PromotionsContent AllPromotions={AllPromotions } SetAllPromotions={SetAllPromotions}  />
           
      </>
  );
}

export default PromotionsPage;


 