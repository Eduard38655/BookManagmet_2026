import style from "../Styles/Header.module.css"
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
function MobileMenuSec1() {
    const location = useLocation();
    const BookId = location.pathname.split("/")[2];
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log(show);
    }, [show]);
    return (
        <>
            <header className={style.MobielHeader_Container}>
                <div className={style.DivTitle }>
                    <h1>Moddern Library</h1>

                    <button onClick={() => setShow(prev => !prev)}>
                        {show ? "X" : "☰"}
                    </button>

                </div>



                {show == true ? <>

                    <div className={style.MobileMenu}>
                    <ul>
                        <li className={location.pathname === "/home" ? style.active : style.inactive}>
                            <Link to="/home">Home</Link>
                        </li>

                        <li
                            className={
                                location.pathname === "/browse" ||
                                    location.pathname === `/browse/${BookId}`
                                    ? style.active
                                    : style.inactive
                            }
                        >
                            <Link to="/browse">Browse</Link>
                        </li>

                        <li className={location.pathname === "/arrivals" ? style.active : style.inactive}>
                            <Link to="/arrivals">New Arrivals</Link>
                        </li>

                        <li className={location.pathname === "/sellers" ? style.active : style.inactive}>
                            <Link to="/sellers">Best Sellers</Link>
                        </li>

                        <li className={location.pathname === "/genres" ? style.active : style.inactive}>
                            <Link to="/genres">Genres</Link>
                            </li>



                            <li className={location.pathname === "/carrito" ? style.active : style.inactive}>
                                 <Link to="/shoppingcart">

                                    <i className="fa-solid fa-cart-shopping"></i>
                                    {" "}
                                    Shopping Cart

                                </Link>
                            </li>

                            <li className={location.pathname === "/usuario" ? style.active : style.inactive}>
                                {user && user.length > 0 ? (
                                    user.map((user) => (
                                        <span key={user.id}>{user.avatar}ss</span>
                                    ))
                                ) : (

                                        <Link to="/dashboard">
                                            <i className="fa-regular fa-user"></i> 
                                            {" " }
                                            Usuario
                                        </Link>
                                )}

                            </li>


                    </ul>
 


                    </div>
                </> : <></>}
               

                 
                  
            </header>

        </>
    );
}

export default MobileMenuSec1