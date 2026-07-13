import style from "../Styles/Empleados.module.css"

import { useEffect, useState } from "react";
 
function OverViewEmp({ AllEmployee }) {
    const [FilterData, SetFilterData] = useState([])

    useEffect(() => {
        
     
            
            let open = 0;
            let posicion = 100;
           


            let Filter = AllEmployee.map((emp) => {
                
                open = emp.status === "active" ? open + 1 : open
                
            })


            SetFilterData({
                Empleados: AllEmployee.length, Active: open, OpenPosicion: posicion - AllEmployee.length
            })

    }, [])
  





  return (
      <>
          <div className={style.ContainerEmpOverView}>

              <div className={style.Div_Cards }>

                  <div className={style.Div_Text}>
                      <label>Total Staff</label>
                      <i className="fa-solid fa-user-group"></i>
                  </div>
                  <span>{FilterData?.Empleados}</span>
              </div>


              <div className={style.Div_Cards}>
                  <div className={style.Div_Text}>
                      <label>Active Now</label>
                      <i className="fa-solid fa-bolt"></i>
                  </div>
                  <span> {FilterData?.Active}</span>
              </div>

              <div className={style.Div_Cards}>
                  <div className={style.Div_Text}>
                      <label>Open Positions</label>
                      <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <span> {FilterData?.OpenPosicion}</span>
                 
              </div>


          </div>
          
          

      </>
  );
}

export default OverViewEmp;