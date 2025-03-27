import pic1 from "../assets/lounge6.png";
import pic2 from "../assets/customer1.png";
import pic3 from "../assets/lounge1.png";
import pic4 from "../assets/room1.png";
import pic5 from "../assets/room2.png";
import pic6 from "../assets/lounge.png";

const Gallery = () => {
  return (
    <div className="m-10">
      <div>
        <h1 className="font-bold text-5xl text-center text-[#022E75] pt-10">
          OUR GALLERY
        </h1>
      </div>
      <div className="w-full items-center justify-center flex mt-5">
        <div className="grid grid-cols-3 gap-2">
          <img className="w-[25rem] h-[18rem]" src={pic1} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic2} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic3} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic4} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic5} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic6} alt="" />
        </div>
      </div>
      <div className="justify-center flex mt-5">
        <button className="hover:bg-[#022E75] w-40 h-12 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Gallery;
