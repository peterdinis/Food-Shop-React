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
            src="https://picsum.photos/200/300"
            alt=""
            className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
        </div>

        <div className="mt-10">
          <h1 className="font-bold text-center text-3xl text-gray-900">
          {currentUser?.email}
          </h1>
          <p className="text-center text-sm text-gray-400 font-medium">
          <button className="mt-10 text-xl text-black font-bold" onClick={handleLogout}>Logout</button>
          </p>
          <h4 className="mt-6 ml-4">My Last Orders</h4>
          <div className="flex justify-between items-center my-5 px-6">
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Facebook
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Twitter
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Instagram
            </a>
            <a
              href=""
              className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
