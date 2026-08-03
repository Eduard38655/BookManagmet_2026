import { createContext, useEffect, useState } from "react";
import { authService } from "../Services/authService";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Al cargar la app, verificar si hay sesión válida en el servidor
  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      try {
        // Primero, intentar verificar autenticación con el servidor
        const authData = await authService.verifyAuth();

        if (authData?.valid) {
          // Si el servidor confirma autenticación, usar esos datos
          const userData = {
            id: authData.userId,
            email: authData.email,
            role: authData.role,
          };
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem("user", JSON.stringify(userData));
        } else {
          // Si no hay autenticación válida en servidor, limpiar datos locales
          const localData = localStorage.getItem("user");
          if (localData) {
            // Había datos en localStorage pero no en servidor
            localStorage.removeItem("user");
            setUser(null);
            setIsAuthenticated(false);
          }
        }
      } catch (error) {
        console.error("Error inicializando autenticación:", error);
        const localData = localStorage.getItem("user");
        if (localData) {
          setUser(JSON.parse(localData));
        }
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

       // Guardar en localStorage cuando cambia el usuario
    useEffect(() => {
       
         if (user) {
           localStorage.setItem("user", JSON.stringify(user));
           setIsAuthenticated(true);
        }

       
       }, [user]);

       return (
         <UserContext.Provider
           value={{
             user,
             setUser,
             isLoading,
             isAuthenticated,
             logout: authService.logout,
           }}
         >
           {children}
         </UserContext.Provider>
       );
     }

     export default UserProvider;