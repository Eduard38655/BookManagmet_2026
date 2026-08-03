import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function ProtectedRoute() {
  const { isLoading, isAuthenticated } = useContext(UserContext);

  // Mientras se valida la autenticación en el servidor
  if (isLoading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" 
      }}>
        <h2>Cargando...</h2>
      </div>
    );
  }

  // Si no está autenticado, redirigir a login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, mostrar la ruta protegida
  return <Outlet />;
}

export default ProtectedRoute;
