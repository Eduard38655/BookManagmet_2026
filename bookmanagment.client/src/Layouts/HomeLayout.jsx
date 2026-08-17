import { Outlet } from "react-router-dom";
import DashMenu from "../Components/DashMenu";

function HomeLayout() {
    return (
        <>
            <DashMenu />
            <main className="HomeContainer">
                <Outlet />
            </main>
        </>
    );
}

export default HomeLayout