import { Outlet } from "react-router-dom";
import style from "../Styles/DashboardPage.module.css";

function SalesLayout() {
    return (
        <div className={style.DashboardPage_Container}>
            <Outlet />
        </div>
    );
}

export default SalesLayout;
