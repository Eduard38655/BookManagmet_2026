import style from "../Styles/Orders.module.css"

function FilterOrders({ AllOrders, SetAllOrders }) {
  return (
      <>

          <div className={style.Container_Filter }>

            

              <div className={style.DivSearch_name }>
                      <i className="fa-solid fa-magnifying-glass"></i>

                      <input type="text" placeholder="Buscar por nombre..." />
                  </div>

              <div className={style.DivContainerInfo } >


                  <div className={style.DivEmpleados}>

                      <select>

                          <option>Empleados</option>
                      </select>

                  </div>



                  <div className={style.DivEstado}>



                      <select>
                          <option>Pending</option>
                          <option>Pagada</option>
                          <option>Enviada</option>
                      </select>

                  </div>




                  <div className={style.DivDateRange}>

                      <input type="date" />
                      {"to"}

                      <input type="date" />


                  </div>

                  <div className={style.DivButtons}>

                      <button><i className="fa-solid fa-filter-circle-xmark"></i> {" "}Reset</button>
                      <button><i className="fa-solid fa-download"></i>{" "}Export Report</button>
                  </div>
              </div>

 
 

          </div>


      </>
  );
}

export default FilterOrders