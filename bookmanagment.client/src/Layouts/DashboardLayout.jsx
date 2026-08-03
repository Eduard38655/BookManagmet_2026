import { Outlet } from "react-router-dom";
import DashMenu from "../Components/DashMenu";

function DashboardLayout() {
    return (
        <>
            <DashMenu />

            <main className="DashboardContainer">
                <Outlet />
            </main>
        </>
    );
}

export default DashboardLayout;