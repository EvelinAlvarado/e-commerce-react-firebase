import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center items-center transition-all duration-[450ms] ease-in-out">
      <nav className="max-w-7xl flex flex-row justify-between  ease-in-out duration-500 left-0 rounded-2xl shadow-lg shadow-black/15 bg-[#b44e31] w-full my-9 px-4">
        <Link className="text-[#ffb603] font-semibold p-4 text-lg" to="/">
          FashionHub
        </Link>
        <ul className="flex">
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <Link
              className="text-[#ffb603] font-semibold text-lg"
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <Link
              className="text-[#ffb603] font-semibold text-lg"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <Link
              className="text-[#ffb603] font-semibold text-lg"
              to="/products/socks"
            >
              Socks
            </Link>
          </li>
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <Link
              className="text-[#ffb603] font-semibold text-lg"
              to="/products/pants"
            >
              Pants
            </Link>
          </li>
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <Link
              className="text-[#ffb603] font-semibold text-lg"
              to="/products/t-shirts"
            >
              T-shirts
            </Link>
          </li>
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <Link
              className="text-[#ffb603] font-semibold text-lg"
              to="/products/hoodies"
            >
              Hoodies
            </Link>
          </li>
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <Link
              className="text-[#ffb603] font-semibold text-lg"
              to="/contact"
            >
              Contacts
            </Link>
          </li>
          <li className="has-[:checked]:shadow-lg relative h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border items-center justify-center text-black rounded-xl cursor-pointer">
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
};
