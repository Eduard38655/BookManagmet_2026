import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import style from "../Styles/Login.module.css";
import MobileMenuSec1 from "../Components/MobileMenuSec1";
function LoginLayout() {
    return (
        <>
            <Header />
            <MobileMenuSec1 />
            <main className={style.main_LoginPag }>
                <Outlet />
            </main>
        </>
    );
}

export default LoginLayout;
