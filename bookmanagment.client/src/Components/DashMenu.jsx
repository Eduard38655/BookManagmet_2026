
import style from "../Styles/Header.module.css"

 
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
function DashMenu() {
    const { user, setUser } = useContext(UserContext)
    const location = useLocation();

    function LogOut() {

        localStorage.clear("user")
        localStorage.clear("User_Token")
    }





  return (

      <nav className={style.nav_Container}> 
       

              <div className={style.SubContainer}>

              <div className={style.Header_Container}  >
                  {user.map((u) => (
                      <>

                          < img src={u.avatar } />
                          <div>
                              <h3>{u.role } Console</h3>
                              <small>Modern library Managment</small>
                          </div>

                      </>

                  )) }

                   
                  </div>


              <ul>
                  <li className={location.pathname === "/dashboard" ? style.activo : style.inactivo}>
                      <Link to="/dashboard">
                          <i className="fa-solid fa-grip-vertical"></i> Dashboard
                      </Link>
                  </li>
                  <li className={location.pathname === "/profile" ? style.activo : style.inactivo}>
                      <Link to="/profile">
                          <i className="fa-solid fa-users"></i> {" "} Profile
                      </Link>
                  </li>


                  <li className={location.pathname === "/inventory" ? style.activo : style.inactivo}>
                      <Link to="/inventory">
                          <i className="fa-brands fa-readme"></i> Inventory
                      </Link>
                  </li>

                  <li className={location.pathname === "/orders" ? style.activo : style.inactivo}>
                      <Link to="/orders">
                          <i className="fa-solid fa-bag-shopping"></i> Orders
                      </Link>
                  </li>

                  <li className={location.pathname === "/promotions" ? style.activo : style.inactivo}>
                      <Link to="/promotions">
                          <i className="fa-solid fa-tags"></i> Promotions
                      </Link>
                  </li>

                  <li className={location.pathname === "/sales" ? style.activo : style.inactivo}>
                      <Link to="/sales">
                          <i className="fa-solid fa-money-bill-1-wave"></i> Sales
                      </Link>
                  </li>

                  <li className={location.pathname === "/reports" ? style.activo : style.inactivo}>
                      <Link to="/reports">
                          <i className="fa-solid fa-chart-simple"></i> { " "} Reports
                      </Link>
                  </li>

                  <li className={location.pathname === "/settings" ? style.activo : style.inactivo}>
                      <Link to="/settings">
                          <i className="fa-solid fa-gear"></i> Settings
                      </Link>
                  </li>
                  </ul>
              </div>
          <div className={style.DivLogout}>
              <button onClick={LogOut() } >Logout{" "}  <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
              </div>
         

      </nav>

  );
}

export default DashMenu;