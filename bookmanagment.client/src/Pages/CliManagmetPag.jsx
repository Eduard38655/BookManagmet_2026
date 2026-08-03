import ManageCustomer from "../Comp_Customer/ManageCustomer"
import CusActivity from "../Comp_Customer/CusActivity"
import style from "../Styles/Cliente.module.css"

import { useEffect, useState } from "react";
import PageTittle from "../Components/TittlePages"
import { useParams } from "react-router-dom"
import Whislist from "../Comp_Customer/Whislist"
function CliManagmetPag() {
    const { clienteId } = useParams()
    const [DataInfo, SetDataInfo] = useState([])

    const [ShowInfo, SetShowInfo] = useState("sales")

    const Menu = [{ name: "Purchase History", route: "1" },
        { name: "Whislist", route: "2" },
        { name: "Reviews", route: "3" }
    ]
    useEffect(() => {

        const FetchCliente = async () => {

            const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://localhost:5186'}/customer/ClientById/${clienteId}`)
            const data = await res.json()
            console.log(data)
            SetDataInfo([data])

        }
        FetchCliente()
    }, [])

 
 
  return (
      <>
          <article className={style.Container_Page_Emp}>
              <PageTittle />
              <div className={style.DivContainerSales}>
                  <div className={style.DivTitle}  >
                      <h4>Recent Order</h4>

                      <div>
                          <div className={style.DivInputSearch}>
                              <i className="fa-solid fa-magnifying-glass"></i>
                              <input type="text" />
                          </div>
                          <button>Filter</button>
                          <button>Exportar</button>


                      </div>
                  </div>
              </div>
              <div className={style.SubContainer }>

                  <ManageCustomer DataInfo={DataInfo} SetDataInfo={SetDataInfo} />
               <CusActivity DataInfo={DataInfo} SetDataInfo={SetDataInfo} />
                         
              </div>
          </article>

      </>
  );
}

export default CliManagmetPag;