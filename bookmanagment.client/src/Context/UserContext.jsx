import { createContext,useEffect,useState } from "react";


export const UserContext = createContext();



 function UserProvider({ children }) {

     const [user, setUser] = useState([]);

    


     useEffect(() => {

         const data = localStorage.getItem("user");

         if (data) {
             setUser(JSON.parse(data));
         }

     }, []);

     useEffect(() => {

         if (user) {
             localStorage.setItem("user", JSON.stringify(user));
         }

     }, [user]);

    return (

        <UserContext.Provider value={{ user, setUser }}>

            {children}

        </UserContext.Provider>

    );

}

export default UserProvider