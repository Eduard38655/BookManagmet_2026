import style from "../Styles/Empleados.module.css";

function EmpImagen({ src }) {
    return (

        <>

            <div className={style.DivImg}>

                < img src={src} alt="Foto de perfil del empleado" />

            </div>
           

        </>
  );
}

export default EmpImagen;