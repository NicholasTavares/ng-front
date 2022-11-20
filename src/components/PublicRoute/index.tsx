import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PublicRoute = () => {
  const auth = useAuth();
  return !auth?.jwt ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
