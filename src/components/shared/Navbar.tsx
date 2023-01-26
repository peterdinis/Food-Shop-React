import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useAuth } from "../../context/AuthContext";

const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
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
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
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
                  <a
                    className="no-underline font-bold inline-block  hover:text-black hover:underline py-2 px-4"
                    href="/products"
                  >
                    Products
                  </a>
                </li>
                {currentUser === null ? (
                  <>
                    <li>
                      <a
                        className="font-bold inline-block no-underline hover:text-black hover:underline py-2 px-4"
                        href="/login"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-bold inline-block no-underline hover:text-black hover:underline py-2 px-4"
                        href="/register"
                      >
                        Register
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a
                        className="font-bold inline-block no-underline hover:text-black hover:underline py-2 px-4"
                        href="/profile"
                      >
                        Profile
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <a
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="/"
            >
              <RestaurantMenuIcon />
              FoodReShop
            </a>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <a
              className="pl-3 inline-block no-underline hover:text-black"
              href="/card"
            >
              <ShoppingBasketIcon /> 0
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
