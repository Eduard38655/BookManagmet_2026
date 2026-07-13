

import EmpleadosContent from "../Comp_Empleados/EmpleadosContent";
import { useEffect, useState } from "react";
import style from "../Styles/Empleados.module.css"
import EmpPagination from "../Comp_Empleados/EmpPagination";
import FilterEmp from "../Comp_Empleados/FilterEmp";
import OverViewEmp from "../Comp_Empleados/OverViewEmp";
import TitleEmp from "../Comp_Empleados/TitleEmp";
import EditarEmp from "../Comp_Empleados/EditarEmp";
function EmpleadosPage() {
    const [AllEmployee, SetAllEmployee] = useState([])
    const [currentItems, setCurrentItems] = useState([]);
    const [ShowDialog, SetShowDialog] = useState(false)
    useEffect(() => {
        const FetchOrders = async () => {

            const response = await fetch("http://localhost:5186/employees/getallempleados");
            const data = await response.json();
            console.log(data)
            SetAllEmployee(data.data)

        }

        FetchOrders()

    }, [])


    const [operation, SetOperation] = useState("update")
    
    return (
        <>
            {ShowDialog && <EditarEmp SetShowDialog={SetShowDialog} operation={operation} SetOperation={SetOperation} />}
            <article className={style.Container_Page_Emp}>


                <TitleEmp SetShowDialog={SetShowDialog} operation={operation} SetOperation={SetOperation} />
                <OverViewEmp AllEmployee={currentItems}  />
                <FilterEmp SetAllEmployee={SetAllEmployee} AllEmployee={AllEmployee} />
                <div className={style.DivTable_Container}>
                    <EmpleadosContent SetAllEmployee={SetAllEmployee} AllEmployee={currentItems} SetShowDialog={SetShowDialog} operation={operation} SetOperation={SetOperation} />
                    <EmpPagination currentItems={currentItems} setCurrentItems={setCurrentItems} AllEmployee={AllEmployee} />
                </div>
            </article>
        </>
  );
}

export default EmpleadosPage;