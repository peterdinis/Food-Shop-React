import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileData: React.FC = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <>
         <h2>{currentUser?.email}</h2>
         <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default ProfileData;