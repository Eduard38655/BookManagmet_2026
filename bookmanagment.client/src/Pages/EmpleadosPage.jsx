

import EmpleadosContent from "../Comp_Empleados/EmpleadosContent";
import { useEffect, useState } from "react";
function EmpleadosPage() {
    const [AllEmployee, SetAllEmployee] = useState([])


    useEffect(() => {
        const FetchOrders = async () => {

            const response = await fetch("http://localhost:5186/employees/getallempleados");
            const data = await response.json();
            console.log(data)
            SetAllEmployee(data.data)

        }

        FetchOrders()

    }, [])

    return (
      <>
            <EmpleadosContent SetAllEmployee={SetAllEmployee} AllEmployee={AllEmployee} />

      </>
  );
}

export default EmpleadosPage;