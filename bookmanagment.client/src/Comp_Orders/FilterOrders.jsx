function FilterOrders({ AllOrders, SetAllOrders }) {
  return (
      <>

          <div>



              <div>
                  <label>Empleados</label>
                  <select>
                      
                        <option>Empleados</option>
                  </select>
              </div>



              <div>

                  <select>
                      <option>Pending</option>
                      <option>Pagada</option>
                      <option>Enviada</option>
                  </select>
              </div>




              <div>
              <label>Date Range </label>
                  <div>
                      <input type="date" /> 
                      {"to" }
                      <input type="date" /> 
                  </div>

              </div>

 

              <div>

                  <button><i className="fa-solid fa-filter-circle-xmark"></i>Reset</button>
                  <button><i className="fa-solid fa-download"></i>Export Report</button>
              </div>

          </div>


      </>
  );
}

export default FilterOrders