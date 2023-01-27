import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
    const {currentUser} = useAuth();
    return currentUser !== null ? <Outlet /> : <Navigate to="/notallowed" />;
}

export default ProtectedRoute;