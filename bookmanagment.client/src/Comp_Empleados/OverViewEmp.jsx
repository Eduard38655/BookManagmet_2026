

import { useEffect, useState } from "react";
 
function OverViewEmp({ AllEmployee }) {
    const [FilterData, SetFilterData] = useState([])

        useEffect(() => {
            const info=[]

            const staff = 0;
            const open = 0;
            const posicion = 100;

            const Filter = AllEmployee.map((emp) => {

                staff = emp.lenngth
                open = emp.status === "Activo" ? open + 1 : open
                posicion = posicion - emp.lenngth
            })


            SetFilterData({
                Empleados: staff, Active:open, OpenPosicion: posicion
            })

    }, [])
 

  return (
      <>
          <div>
              <div>

                  <div>
                      <label>Total Staff</label>
                      <i className="fa-solid fa-user-group"></i>
                  </div>
                  <span>{FilterData?.Empleados}</span>
              </div>


              <div>
                  <div>
                      <label>Active Now</label>
                      <i className="fa-solid fa-bolt"></i>
                  </div>
                  <span> {FilterData?.Active}</span>
              </div>

              <div>
                  <div>
                      <label>Open Positions</label>
                      <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <span> {FilterData?.OpenPosicion}</span>
                  <small>Ver vacantes Activas</small>
              </div>


          </div>
          
          

      </>
  );
}

export default OverViewEmp;