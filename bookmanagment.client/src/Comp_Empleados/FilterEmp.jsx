function FilterEmp() {
  return (
      <>

          <div>
              <label>Filtrar por:</label>


              <div>
                  <select>
                  <option>Todos los Departamentos</option>
                  </select>


                  <select>
                      <option>Todos los Roles</option>
                  </select>



                  <select>
                      <option>Cualquier Estado</option>
                  </select>
              </div>
              <button><i className="fa-solid fa-filter-circle-xmark"></i>Limpiar Filtros</button>
          </div>
      </>
  );
}

export default FilterEmp;