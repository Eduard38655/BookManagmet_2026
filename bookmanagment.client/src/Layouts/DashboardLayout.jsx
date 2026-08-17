import { Outlet } from "react-router-dom";
import DashMenu from "../Components/DashMenu";
import style from "../Styles/DashboardPage.module.css"
function DashboardLayout() {
    return (
        < div className={style.DashboardContainer }>
            <DashMenu />

            <main  >
                <Outlet />
            </main>
        </>
    );
}

export default DashboardLayout;