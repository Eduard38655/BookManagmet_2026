import { Outlet } from "react-router-dom";
import style from "../Styles/Shopping.module.css";

function ShoppingLayout() {
    return (
        <article className={style.Main_Container_Book_Page}>
            <Outlet />
        </article>
    );
}

export default ShoppingLayout;
