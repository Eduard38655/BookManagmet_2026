import { Outlet } from "react-router-dom";
import DashMenu from "../Components/DashMenu";

function AdminLayout() {
    return (
        <>
            <DashMenu />
            <main className="DashboardContainer">
                <Outlet />
            </main>
        </>
    );
}

export default AdminLayout;
