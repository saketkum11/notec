import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth-context";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuth();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export { RequireAuth };
