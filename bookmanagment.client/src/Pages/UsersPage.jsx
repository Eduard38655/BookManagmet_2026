import { useState, useEffect } from "react";
import UsersContent from "../UserComps/UsersContent"
function UsersPage() {
    const [Users, Set_Users] = useState([])


    useEffect(() => {
        const GetAll_Users = async () => {
            const token = localStorage.getItem("User_Token") || "";

            try {
                const response = await fetch("http://localhost:5186/user/all", {
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
                console.log(data)
                Set_Users(data.data)
                console.log("Cart data:", data);
            } catch (error) {
                console.error("GetAll_Books error:", error);
            }
        };

        GetAll_Users();

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


                <select >

                    <option>Todos los roles</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Employee</option>
                    <option>Other</option>
                </select>

                <select>
                    <option>Estado</option>
                    <option>Activos</option>
                    <option>Inactivo</option>
                </select>
                <buttons><i className="fa-solid fa-filter"></i>Filtros</buttons>
            </div>


            <UsersContent Users={Users} Set_Users={Set_Users} />
        </>
    );
}

export default UsersPage;