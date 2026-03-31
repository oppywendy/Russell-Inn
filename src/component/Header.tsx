import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);
  return (
    <div className="w-full h-[12vh] items-center justify-center bg-white/80 flex fixed z-50 font-roboto shadow-md">
      <div className="w-[98%] h-[90%] justify-between items-center flex mx-auto px-4 py-3">
        <div>
          <a href="/">
            <img className="w-[5rem] lg:w-[6rem]" src={logo} alt="" />
          </a>
        </div>
        <div className="justify-end items-end md:flex md:text-xl text-sm hidden">
          <ul className="flex md:gap-5 gap-2">
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="facilities">Facilities</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="rooms">Rooms</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden z-50 hover:text-[#d4af37] text-black"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <BiX size={35} color="blue" />
          ) : (
            <BiMenu size={35} color="blue" />
          )}
        </button>
      </div>
      <hr />

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-md md:hidden z-40
          flex flex-col items-center justify-center gap-6
          transform transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
        >
          <ul className="flex flex-col items-center gap-6 text-white text-lg">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                onClick={closeMenu}
                className="hover:text-blue-600"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/facilities"
                onClick={closeMenu}
                className="hover:text-blue-600"
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={closeMenu}
                className="hover:text-blue-600"
              >
                Gallery
              </Link>
            </li>
            <li>
              <button
                onClick={closeMenu}
                className="bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Link to="/checkout">BOOK NOW</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
