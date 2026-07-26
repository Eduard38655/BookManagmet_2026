import style from "../Styles/Cliente.module.css"
import ManageCustomer from "../Comp_Customer/ManageCustomer"
import { useState } from "react";
import {useNavigate } from "react-router-dom"
function CustomerContent({ Customers, Set_Custome }) {
    const [FilterData, SetFilter] = useState([])
    const navigate = useNavigate()
    

    return (<>

         <table  >

            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Teléfono</th>

                    <th>status</th>
                    <th>Creado</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>

                {Customers.map((cus, index) => (

                    <tr key={index}>
                        <td>
                            <img src={cus.avatarUrl} />
                            <span>{cus.fullName}  <br />  <small>{cus.email}  </small> </span>
                        </td>

                        <td>{cus.phone}</td>


                        <td className={cus.status ? style.active : style.inactive}   ><span> ● </span>
                            {cus.status}</td>

                        <td>{cus.createdAt}</td>
                        <td>
                            <button onClick={() => {
                                
                                navigate(`/customer/${cus.id}`);;
                            }}>
                                <i className="fa-solid fa-pen"></i>
                            </button>
                            {" "}
                            <button  >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    </>
  );
}

export default CustomerContent;