import { Outlet } from "react-router-dom";
import style from "../Styles/Cliente.module.css";

function CustomerLayout() {
    return (
        <article className={style.MainContainerSection_Page}>
            <Outlet />
        </article>
    );
}

export default CustomerLayout;
