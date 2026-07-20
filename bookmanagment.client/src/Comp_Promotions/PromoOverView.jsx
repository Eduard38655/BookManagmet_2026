import style from "../Styles/Promotion.module.css"

function PromoOverView() {
    return (

          

            <div className={style.DivFilter_Container}>

          <div className={style.SearchInput}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Buscar por Nombre o ID..." />
          </div>



            <div className={style.DivSelect }>
              <div>
                  <select>
                  <option>Estado</option>
                  
                  </select>
              </div>
          </div>

            <div className={style.DivSelect}> 
              <div>
                  <select>
                      <option>Empleados</option>

                  </select>
              </div>
          </div>
            <div className={style.DivSearchDate}>

                
                    <input type="date" />
                    {"to"}
                    <input type="date" /> 
                 
          </div>

          <button>
              <i className="fa-solid fa-filter-circle-xmark"></i>{" "}
              Limpiar 
          </button>
      </div>
  );
}

export default PromoOverView;