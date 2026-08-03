import { Outlet } from "react-router-dom";
import style from "../Styles/Inv.module.css";

function InventoryLayout() {
    return (
        <article className={style.MainContainerSection_Page}>
            <Outlet />
        </article>
    );
}

export default InventoryLayout;
