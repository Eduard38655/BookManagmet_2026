import { createContext, useEffect, useState } from "react";


export const IDsContext = createContext();



function IDsProvider({ children }) {

    const [EmployeeId, setEmployeeId] = useState(null);



    useEffect(() => {
        console.log(EmployeeId)

    }, [EmployeeId]);
    

    return (

        <IDsContext.Provider value={{ EmployeeId, setEmployeeId }}>

            {children}

        </IDsContext.Provider>

    );

}

export default IDsProvider