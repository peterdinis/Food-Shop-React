import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  <Link
                    className="no-underline font-bold inline-block  hover:text-black hover:underline py-2 px-4"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                  <>
                    <li>
                      <Link
                        className="font-bold inline-block no-underline hover:text-black hover:underline py-2 px-4"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-bold inline-block no-underline hover:text-black hover:underline py-2 px-4"
                        to="/register"
                      >
                        Register
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="font-bold inline-block no-underline hover:text-black hover:underline py-2 px-4"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                  </>
              </ul>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <Link
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              to="/"
            >
              <RestaurantMenuIcon />
              FoodReShop
            </Link>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <Link
              className="pl-3 inline-block no-underline hover:text-black"
              to="/card"
            >
              <ShoppingBasketIcon /> 111
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
