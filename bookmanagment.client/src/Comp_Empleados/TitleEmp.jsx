import style from "../Styles/Empleados.module.css"
function TitleEmp({ SetShowDialog, SetOperation }) {
  return (
      <>
          <div className={style.DivTitleEmp } >
              <div>
                  <h2>Gestion de Empleados</h2>
                  <p>Administre Cuentas, roles y accesos del sistema</p>
              </div>
              <button onClick={() => {SetShowDialog(true), SetOperation("insert")} } ><i className="fa-solid fa-user-plus"></i>{" "}Crear Usuario</button>
          </div>

      </>
  );
} 

export default TitleEmp;