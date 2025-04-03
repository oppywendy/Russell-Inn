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
    <div className="bg-[#ddd] w-full font-roboto md:pt-24 pt-16 md:pb-20 pb-16">
      <div>
        <h1 className="font-bold md:text-5xl text-3xl text-center text-[#022E75]">
          RESTAURANT & LOUNGE
        </h1>
        <div className="w-[100%] justify-center flex items-center md:pt-16 pt-10">
          <div className="w-[90%]">
            <div className="text-left">
              <p className="md:text-2xl text-xl font-semibold">
                Savor the moment one bite at a time, where every flavor tells a
                story
              </p>
              <p className="md:text-xl text-lg pt-1">
                Join us at our restaurants, where our skilled chefs eagerly
                await your arrival. Experience a blend of culinary traditions
                and international influences, infused with delectable and
                inventive innovations that are sure to gratify even the most
                discerning palates.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center flex pt-12">
          <div className="w-[90%]">
            <div className="grid md:grid-cols-3 md:gap-2 gap-1 justify-center items-center">
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
    </div>
  );
};

export default Lounge;
