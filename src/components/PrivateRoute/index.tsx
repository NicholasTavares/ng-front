import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth?.jwt ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
