import React from "react";
import pic from "../assets/lounge6.png";

const Landing = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="bg-cover bg-center md:h-screen h-[55h] w-full bg-blue-900 bg-opacity-50 bg-blend-overlay"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="w-[50%] h-[80%] items-center justify-center flex text-white">
          <div>
            <h1 className="text-3xl">WELCOME TO</h1>
            <h1 className="text-8xl">RUSSELL INN</h1>
            <h1 className="text-5xl">HOTEL</h1>
            <p className="text-lg">Making ordinary extraordinary</p>
          </div>
        </div>
        <div className=" flex justify-center h-[20%]">
          <button className="hover:bg-[#022E75] w-40 h-12 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
            <a href="https://wa.me/2348096999444">BOOK NOW</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
