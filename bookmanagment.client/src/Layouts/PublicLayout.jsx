import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function PublicLayout() {
    return (
        <>
            <Header />
            <main className="main_Container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default PublicLayout;
