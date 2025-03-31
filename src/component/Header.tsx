import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full h-[12vh] items-center justify-center bg-[#FFFFFF] flex fixed z-50">
      <div className="w-[98%] h-[90%] justify-between items-center flex">
        <div>
          <img className="w-[8rem]" src={logo} alt="" />
        </div>
        <div className="justify-end items-end flex md:text-xl text-sm">
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
      </div>
      <hr />
    </div>
  );
};

export default Header;
