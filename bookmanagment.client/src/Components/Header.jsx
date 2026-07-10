import style from "../Styles/Header.module.css"
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"  
function Header() {
    const location = useLocation();
    const BookId = location.pathname.split("/")[2];
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();

    

  return (
      <>
          <header className={style.Header_Container }>
              <h1>Moddern Library</h1>
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
              </ul>
              <div className={style.Header_Icons}>
                  <button onClick={() => navigate("/dashboard") }>
                      {user && user.length > 0 ? (
                          user.map((user) => (
                              <span key={user.id}>{user.avatar}</span>
                          ))
                      ) : (<i className="fa-regular fa-user"></i>)}
                  </button>
                  <button onClick={() =>   navigate("/shoppingcart")  }>
                      <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                
              </div>

          </header>

      </>
  );
}

export default Header;