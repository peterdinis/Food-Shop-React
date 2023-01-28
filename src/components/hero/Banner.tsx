import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
      <div className="mx-4 text-center text-white mb-36">
        <h1 className="font-bold text-8xl mb-4">FoodReShop</h1>
        <h2 className="font-bold text-2xl mb-12">
          Quality food for good prices
        </h2>
        <button className="bg-blue-100 p-2 rounded-lg text-xl font-bold text-black">
          <Link to="/products">Our Quality food</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
