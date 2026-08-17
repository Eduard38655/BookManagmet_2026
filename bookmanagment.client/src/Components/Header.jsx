import style from "../Styles/Header.module.css"
import { Link, useLocation,NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faMagnifyingGlass,
    faUser,
   faCartShopping  
 
} from "@fortawesome/free-solid-svg-icons";
function Header() {
    const location = useLocation();
    const BookId = location.pathname.split("/")[2];
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();


    const RoutesHeader = [
        { Route: "/", name: "Home",id:1 },
        { Route: "/browse",name:"Browse" ,id:2},
        { Route: "/arrivals", name: "New Arrivals",id:3 },
        { Route: "/sellers", name: "Best Sellers",id:4 }]


    return (
        <div className={style.MainContainer_Header}> 
         


                <header className={style.Header_Container}>
                    <h1><span>Moddern</span> Library</h1>
                <ul>
                    {RoutesHeader.map((r, index) => (
                        <li key={index}>
                            <NavLink
                                to={r.Route}
                                className={({ isActive }) =>
                                    isActive ? style.active : style.inactive
                                }
                            >
                                {r.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                    <div className={style.Header_Icons}>
                        <button onClick={() => navigate("/dashboard")}>



                            {user && user.length > 0 ? (
                                user.map((user) => (
                                    <span key={user.id}>{user.avatar}</span>
                                ))
                            ) : (<>
                                <FontAwesomeIcon icon={faUser} />
                            </>)}
                        </button>
                        <button onClick={() => navigate("/cart")}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>

                    </div>

                </header>

       

      </div>
  );
}

export default Header;