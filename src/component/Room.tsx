import { TbCurrencyNaira } from "react-icons/tb";
import pic1 from "../assets/room1.png";
import pic2 from "../assets/room2.png";

const Room = () => {
  return (
    <div className="w-full pt-10 mb-5 justify-center items-center flex">
      <div className="w-[90%]">
        <h1 className="md:text-5xl text-3xl text-center font-bold md:mt-10 mt-2 text-[#022E75] pt-10">
          ROOMS AND RATES
        </h1>
        <p className="md:text-2xl text-sm justify-center flex md:pt-10 pt-3">
          Russell Inn is dedicated to delivering outstanding customer
          experiences, creating memorable stays, and building lasting
          relationships with our guests,partners, and the local community
        </p>
        <div className="pt-5">
          <div className="w-full border border-black">
            <div className="relative w-full justify-center items-center flex">
              <img src={pic1} alt="" />
              <div className="absolute w-full bottom-0 h-[12%] justify-center items-center flex md:text-4xl font-bold font-serif bg-[#022E75] text-white">
                <p>EXECUTIVE ROOM</p>
              </div>
            </div>
            <div className=" items-center justify-around flex w-[100%] md:h-[6rem] h-[3rem]">
              <div className="flex W-[50%] justify-center items-center">
                <TbCurrencyNaira size={30} />
                <p className="font-bold md:text-2xl text-xl">30,000</p>
              </div>
              <div className=" flex justify-center items-center W-[50%]">
                <button className="hover:bg-[#022E75] md:w-36 w-28 md:h-8 h-6 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                  <a href="https://wa.me/2348096999444">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="w-full border border-black">
            <div className="relative w-full justify-center items-center flex">
              <img src={pic2} alt="" />
              <div className="absolute w-full bottom-0 h-[12%] justify-center items-center flex md:text-4xl font-bold font-serif bg-[#022E75] text-white">
                <p>EXECUTIVE ROOM</p>
              </div>
            </div>
            <div className=" items-center justify-around flex w-[100%] md:h-[6rem] h-[3rem]">
              <div className="flex W-[50%] justify-center items-center">
                <TbCurrencyNaira size={30} />
                <p className="font-bold md:text-2xl text-xl">40,000</p>
              </div>
              <div className=" flex justify-center items-center W-[50%]">
                <button className="hover:bg-[#022E75] md:w-36 w-28 md:h-8 h-6 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                  <a href="https://wa.me/2348096999444">BOOK NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
