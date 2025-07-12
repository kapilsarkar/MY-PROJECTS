import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { toggleTheme } from "../utils/themeSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const dispatch = useDispatch();

  const isDarkMode = useSelector((store) => store.theme.darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <header className=" w-full shadow-md dark:bg-gray-900 dark:text-white text-black bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl flex justify-between items-center px-4 py-4">
        <h1 className=" text-3xl font-extrabold tracking-wide">
          FASHION <span className=" text-3xl text-red-500">CUBE</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-lg font-medium">
          <a href="#" className="hover:text-red-500 transition">
            Home
          </a>
          <a
            href="#"
            className="flex items-center hover:text-red-500 transition"
          >
            Cart <FaCartShopping className="ml-2" />
          </a>
          <button
            className="ml-auto p-2 border-2 bg-white text-black dark:bg-gray-950 dark:text-white rounded"
            onClick={() => dispatch(toggleTheme())}
          >
            {isDarkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md border-t">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li className="hover:text-red-500">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-red-500 flex items-center">
              <a href="#" className="flex items-center">
                Cart <FaCartShopping className="ml-2" />
              </a>
            </li>
            
          </ul>
           <button
            className="ml-auto p-2 border-2 bg-white text-black dark:bg-gray-950 dark:text-white rounded"
            onClick={() => dispatch(toggleTheme())}
          >
            {isDarkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
