import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <nav className="max-w-7xl w-full my-4 px-4 md:mx-4">
        <div className="flex justify-between items-center bg-[#b44e31] px-4 rounded-lg shadow-lg shadow-black/15">
          <Link className="text-[#ffb603] font-semibold p-4 text-lg" to="/">
            FashionHub
          </Link>
          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#ffb603] focus:outline-none"
            >
              {isOpen ? <CloseRoundedIcon /> : <MenuIcon />}
            </button>
          </div>
          <ul className="hidden md:flex md:space-x-8 items-center">
            <li>
              <Link
                className="text-[#ffb603] font-semibold text-lg hover:underline"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-[#ffb603] font-semibold text-lg hover:underline"
                to="/products"
              >
                Products
              </Link>
            </li>
            {/* <li>
            <Link
              className="text-[#ffb603] font-semibold text-lg hover:underline"
              to="/products/socks"
            >
              Socks
            </Link>
          </li>
          <li>
            <Link
              className="text-[#ffb603] font-semibold text-lg hover:underline"
              to="/products/pants"
            >
              Pants
            </Link>
          </li>
          <li >
            <Link
              className="text-[#ffb603] font-semibold text-lg hover:underline"
              to="/products/t-shirts"
            >
              T-shirts
            </Link>
          </li>
          <li >
            <Link
              className="text-[#ffb603] font-semibold text-lg hover:underline"
              to="/products/hoodies"
            >
              Hoodies
            </Link>
          </li> */}
            {/* <li >
            <Link
              className="text-[#ffb603] font-semibold text-lg hover:underline"
              to="/contact"
            >
              Contacts
            </Link>
          </li> */}
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
        {/* Mobile Menu (Visible only on small screens) */}
        {isOpen && (
          <ul className="md:hidden bg-[#b44e31] flex flex-col space-y-4 mt-4 p-4 rounded-lg shadow-lg">
            <li>
              <Link
                className="text-[#ffb603] font-semibold text-lg hover:underline"
                to="/about-us"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-[#ffb603] font-semibold text-lg hover:underline"
                to="/products"
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
