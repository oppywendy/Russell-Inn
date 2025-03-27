import React from "react";
import pic1 from "../assets/lounge.png";
import pic2 from "../assets/food7.png";
import pic4 from "../assets/drink6.png";
import pic5 from "../assets/drink7.png";
import pic7 from "../assets/food1.png";
import pic8 from "../assets/food2.png";
import pic9 from "../assets/food3.png";
import pic10 from "../assets/drink1.png";
import pic12 from "../assets/food6.png";

const Lounge = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="mt-10">
        <h1 className="font-bold text-5xl text-center text-[#022E75] pt-10">
          RESTAURANT & LOUNGE
        </h1>
        <div className="text-center mt-3">
          <p className="text-2xl">
            Savor the moment one bite at a time, where every flavor tells a
            story
          </p>
          <p className="text-xl">
            Join us at our restaurants, where our skilled chefs eagerly await
            your arrival. Experience a blend of culinary traditions and
            international influences, infused with delectable and inventive
            innovations that are sure to gratify even the most discerning
            palates.
          </p>
        </div>
        <div className="w-full items-center justify-center flex mt-5">
          <div className="grid grid-cols-3 gap-3">
            <img className="w-[400px] h-[300px]" src={pic1} alt="" />
            <img className="w-[400px] h-[300px]" src={pic2} alt="" />
            <img className="w-[400px] h-[300px]" src={pic12} alt="" />
            <img className="w-[400px]" src={pic8} alt="" />
            <img className="w-[400px]" src={pic9} alt="" />
            <img className="w-[400px]" src={pic7} alt="" />
            <img className="w-[400px]" src={pic10} alt="" />
            <img className="w-[400px]" src={pic5} alt="" />
            <img className="w-[400px]" src={pic4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
