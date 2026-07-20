
import style from "../Styles/Header.module.css"

 
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
function DashMenu() {
    const { user, setUser } = useContext(UserContext)
    const location = useLocation();

    function LogOut() {

        localStorage.clear("user")
        localStorage.clear("User_Token")
    }

    /*Rutas del sistema  */
    const menu = [
        { path: "/dashboard", icon: "fa-grip-vertical", text: "Dashboard" },
        { path: "/home", icon: "fa-house", text: "Home" },
        { path: "/customer", icon: "fa-users", text: "Clientes" },
        { path: "/employee", icon: "fa-user-tie", text: "Empleados" },
        { path: "/profile", icon: "fa-users", text: "Profile" },
        { path: "/inventory", icon: "fa-warehouse", text: "Inventory" },
        { path: "/orders", icon: "fa-bag-shopping", text: "Orders" },
        { path: "/promotions", icon: "fa-tags", text: "Promotions" },
        { path: "/sales", icon: "fa-money-bill-1-wave", text: "Sales" },
        { path: "/reports", icon: "fa-chart-simple", text: "Reports" },

        { path: "/settings", icon: "fa-gear", text: "Ajuste" },

    ];  

  return (

      <nav className={style.nav_Container}> 
       

          <div className={style.SubContainer}>
         


                  <div className={style.Header_Container}  >
                      {user.map((u) => (
                          <>

                              < img src={u.avatar} />
                              <div>
                                  <h3>{u.role} Console</h3>
                                  <small>Modern library Managment</small>
                              </div>

                          </>

                      ))}


                  </div>

              <ul>
                  {menu.map((item) => (
                      <li key={item.path}>
                          <NavLink
                              to={item.path}
                              className={({ isActive }) =>
                                  isActive ? style.activo : style.inactivo
                              }
                          >
                              <i className={`fa-solid ${item.icon}`}></i> { " "}
                              {item.text}
                          </NavLink>
                      </li>
                  ))}
              </ul>

              </div>
               <div className={style.DivLogout}>
                  <button onClick={LogOut()} >Logout{" "}  <i className="fa-solid fa-arrow-right-from-bracket"></i></button>


              </div>
               
         

      </nav>

  );
}

export default DashMenu;