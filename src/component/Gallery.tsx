import pic1 from "../assets/lounge6.png";
import pic2 from "../assets/customer1.png";
import pic3 from "../assets/lounge1.png";
import pic4 from "../assets/room1.png";
import pic5 from "../assets/room2.png";
import pic6 from "../assets/lounge.png";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className=" w-full md:pt-24 pt-16 font-roboto md:pb-20 pb-16 bg-[#F8F8F8]">
      <div>
        <div>
          <h1 className="font-bold md:text-5xl text-3xl text-center text-[#022E75]">
            OUR GALLERY
          </h1>
        </div>
        <div className="w-full items-center justify-center flex md:pt-16 pt-10">
          <div className="grid md:grid-cols-3 gap-2 w-[90%] justify-center items-center">
            <img className="w-[25rem] h-[18rem]" src={pic1} alt="" />
            <img className="w-[25rem] h-[18rem]" src={pic2} alt="" />
            <img className="w-[25rem] h-[18rem]" src={pic3} alt="" />
            <img className="w-[25rem] h-[18rem]" src={pic4} alt="" />
            <img className="w-[25rem] h-[18rem]" src={pic5} alt="" />
            <img className="w-[25rem] h-[18rem]" src={pic6} alt="" />
          </div>
        </div>
        <div className="justify-center flex md:pt-16 pt-10">
          <button className="hover:bg-[#022E75] md:w-40 w-36 md:h-12 h-10 rounded-lg justify-center items-center flex cursor-pointer bg-blue-600 text-white">
            <Link to="/gallery">VIEW MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
