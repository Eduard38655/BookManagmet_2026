import { Outlet } from "react-router-dom";
import style from "../Styles/Promotion.module.css";

function PromotionsLayout() {
    return (
        <article className={style.Container_Page_Emp}>
            <Outlet />
        </article>
    );
}

export default PromotionsLayout;
