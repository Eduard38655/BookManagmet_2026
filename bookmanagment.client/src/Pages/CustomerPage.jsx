import { useState, useEffect } from "react";
import CustomerContet from "../Comp_Customer/CustomerContent"
import EmpPagination from "../Comp_Empleados/EmpPagination";
import style from "../Styles/Cliente.module.css"
function CustomerPage() {
    const [Customers, Set_Customer] = useState([])
    const [AllEmployee, SetAllEmployee] = useState([])
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        const GetAll_Customer = async () => {
            const token = localStorage.getItem("User_Token") || "";

            try {
                const response = await fetch("http://localhost:5186/customer/all", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token ? { Authorization: `Bearer ${token}` } : {})
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: response.statusText }));
                    console.error("Error fetching cart:", errorData);
                    return;
                }

                const data = await response.json();
                Set_Customer(data.data)
                console.log("Cart data:", data);
            } catch (error) {
                console.error("GetAll_Books error:", error);
            }
        };

        GetAll_Customer();

    }, [])
    return (
        <article className={style.Container_Page_Emp}>

            <div className={style.DivTitleEmp}>
              <div >
                  <h3>Gestion de Usuarios</h3>
              <p>Administre cuentas y accessos del sistema </p>
              </div>
                <button><i className="fa-solid fa-user-plus"></i>{" " }Crear Cliente</button>
            </div>

            <div className={style.DivFilter_Container}>

                <div className={style.SearchInput}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  < input type="text" placeholder="Buscar usuario" />
              </div>

 
                <div className={style.SearchBySelect}>
                    <select>
                        <option>Estado</option>
                        <option>Activos</option>
                        <option>Inactivo</option>
                    </select>
                </div>

                <button>
                    <i className="fa-solid fa-filter"></i>{" "}
                    Filtros
                </button>
          </div>
          <div className={style.DivTable_Container}>
              <CustomerContet Customers={currentItems} Set_Customer={Set_Customer} />
              <EmpPagination currentItems={currentItems} setCurrentItems={setCurrentItems} AllEmployee={Customers} />

          </div>
      </article>
  );
}

export default CustomerPage;