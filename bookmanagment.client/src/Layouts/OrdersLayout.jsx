import { Outlet } from "react-router-dom";
import style from "../Styles/Orders.module.css";

function OrdersLayout() {
    return (
        <article className={style.MainContainerSection_Page}>
            <Outlet />
        </article>
    );
}

export default OrdersLayout;
