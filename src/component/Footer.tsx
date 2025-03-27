import React from "react";
import pic from "../assets/IMG_5227.png";

const Footer = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center bg-black text-white">
        <div className="w-[90%] flex">
          <div className="w-[30%]">
            <ul className="">
              <li className=" pt-5 font-serif">ABOUT</li>
              <li className="pt-5 font-serif">GALLERY</li>
              <li className="pt-5 font-serif">ABOUT US</li>
              <li className="pt-5 font-serif">TESTIMONIALS</li>
              <li className="pt-5 font-serif">CONTACT US</li>
              <li className="pt-5 font-serif">TERMS & CONDITIONS</li>
            </ul>
          </div>
          <div className=" justify-center items-center flex w-[40%]">
            <img
              className="w-[20rem] justify-center flex items-center"
              src={pic}
              alt=""
            />
          </div>
          <div className="w-[30%] justify-center items-center flex">
            <div>
              <p className="pt-5 font-serif text-xl">
                Address: 141d Gbagada Oworonshoki Expressway Phase 1 Lagos
              </p>
              <p className="pt-1 font-serif text-xl">Call us: +2348106994357</p>
              <p className="pt-1 font-serif text-xl">
                Whatsapp: +2348096999444
              </p>
              <p className="pt-1 font-serif text-xl">
                Email: russellinn9@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
