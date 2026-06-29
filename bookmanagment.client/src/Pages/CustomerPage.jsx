import { useState, useEffect } from "react";
import CustomerContet from "../CustomerComp/CustomerContent"
function CustomerPage() {
    const [Customers, Set_Customer] = useState([])


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
      <>
          <div>
              <div>
                  <h3>Gestion de Usuarios</h3>
              <p>Administre cuentas y accessos del sistema </p>
              </div>
              <button><i className="fa-solid fa-user-plus"></i>Crear usuario</button>
          </div>
          <div>
              <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  < input type="text" placeholder="Buscar usuario" />
              </div>

              <select>
                  <option>Estado</option>
                  <option>Activos</option>
                  <option>Inactivo</option>
              </select>
              <buttons><i className="fa-solid fa-filter"></i>Filtros</buttons>
          </div>
          <CustomerContet Customers={Customers} Set_Customer={Set_Customer } />
      </>
  );
}

export default CustomerPage;