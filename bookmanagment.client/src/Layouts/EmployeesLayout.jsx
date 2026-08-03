import { Outlet } from "react-router-dom";
import style from "../Styles/Empleados.module.css";

function EmployeesLayout() {
    return (
        <article className={style.MainContainerSection_Page}>
            <Outlet />
        </article>
    );
}

export default EmployeesLayout;
