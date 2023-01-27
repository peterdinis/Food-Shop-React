import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileData: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container mx-auto my-60">
      {/* <h2>{currentUser?.email}</h2>
            <button onClick={handleLogout}>Logout</button> */}

      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
        <div className="flex justify-center">
          <img
            src="https://avatars0.githubusercontent.com/u/35900628?v=4"
            alt=""
            className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
        </div>

        <div className="mt-10">
          <h1 className="font-bold text-center text-3xl text-gray-900">
            Pantazi Software
          </h1>
          <p className="text-center text-sm text-gray-400 font-medium">
            UI Components Factory
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
