import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileOrders from './ProfileOrders';

const ProfileData: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  console.log(currentUser);

  return (
    <div className="container mx-auto my-60">
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
            <button
              className="mt-10 text-xl text-black font-bold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </p>
          <h4 className="mt-6 ml-4">My Last Orders</h4>
          <ProfileOrders />
         </div>
      </div>
    </div>
  );
};

export default ProfileData;
