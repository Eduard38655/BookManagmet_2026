import style from "../Styles/Empleados.module.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IDsContext } from "../Context/IDsContext.jsx"  
function EmpleadosContent({ AllEmployee, SetAllEmployee, SetShowDialog,   SetOperation }) {
    const { EmployeeId, setEmployeeId } = useContext  (IDsContext);

    const navigate = useNavigate();
    return (
        <table  >

            <thead>
                <tr>
                    <th>Empleado</th>
                    <th>Teléfono</th>
                    <th>Rol</th>
                    <th>Posición / Departamento</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>

                {AllEmployee.map((emp,index) => (

                    <tr key={index}>
                        <td>
                            <img src={emp.avatarUrl} />
                            <span>{emp.fullName}  <br />  <small>{emp.email}  </small> </span>
                        </td>
                        
                        <td>{emp.phone}</td>
                        <td>{emp.role?.name}</td>
                        <td>{emp.position}</td>
                        <td className={emp.status ? style.active : style.inactive}   ><span> ● </span>     {emp.status}</td>

                        <td>

                            <button onClick={() => { SetShowDialog(true), setEmployeeId(emp.id), SetOperation("update") }} >
                                <i className="fa-solid fa-pen"></i>
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}

export default EmpleadosContent;