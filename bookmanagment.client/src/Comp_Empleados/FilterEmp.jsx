import style from "../Styles/Empleados.module.css"

function FilterEmp({ AllEmployee, SetAllEmployee }) {
  return (
      <>

          <div className={style.DivFilter_Container}>
              <div className={style.SearchInput }>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Buscar por nombre, email o ID..." />
              </div>


              <div className={style.SearchBySelect }>
                  <div>

                      <select>
                          <option>Departamentos</option>
                      </select>
                  </div>


                  <div>
                      <select>
                          <option>Todos los Roles</option>
                          <option>Admin</option>
                          <option>Empleado</option>
                          <option>Owner</option>
                      </select>
                  </div>




                  <div>
                      <select>
                          <option>Cualquier Estado</option>
                          <option>Activo</option>

                          <option>Inactivo</option>
                      </select>
                  </div>

              </div>
              <button><i className="fa-solid fa-filter-circle-xmark"></i>{ " "}Limpiar Filtros</button>
          </div>
      </>
  );
}

export default FilterEmp;