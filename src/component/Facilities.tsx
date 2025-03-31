import pic from "../assets/lounge.png";
import pic2 from "../assets/lounge6.png";
import pic3 from "../assets/website-featured-An-Image-depicting-a-laundry-business.jpg";
import pic4 from "../assets/lounge1.png";

const Facilities = () => {
  return (
    <div className="w-full pt-10 mb-5 justify-center items-center flex">
      <div className="w-[90%]">
        <h1 className="md:text-5xl text-3xl text-center font-bold md:mt-10 mt-2 text-[#022E75] pt-10">
          FACILITIES
        </h1>
        <p className="md:text-2xl text-sm justify-center flex md:pt-10 pt-3">
          We want your stay at Russell inn to be truly unforgetable. That is why
          we give special attention to all of your needs so that we can ensure
          an experience quite unique. Russell inn offers the perfect setting
          with stunning views for leisure and our modern luxury lounge
          facilities will help you enjoy the best of all.
        </p>
        <div className="relative justify-center items-center flex mt-10">
          <img src={pic} alt="" />
          <div className="absolute bottom-0 bg-white items-center w-[40%] h-[7%] justify-center flex text-center md:text-4xl text-[#022E75]">
            LOUNGE
          </div>
        </div>
        <div className="relative justify-center items-center flex mt-10">
          <img src={pic2} alt="" />
          <div className="absolute bottom-0 bg-white items-center w-[40%] h-[7%] justify-center flex text-center md:text-4xl text-[#022E75]">
            RESTAURANT
          </div>
        </div>
        <div className="relative justify-center items-center flex mt-10">
          <img src={pic4} alt="" />
          <div className="absolute bottom-0 bg-white items-center w-[40%] h-[7%] justify-center flex text-center md:text-4xl text-[#022E75]">
            EVENT CENTER
          </div>
        </div>
        <div className="relative justify-center items-center flex mt-10">
          <img src={pic3} alt="" />
          <div className="absolute bottom-0 bg-white items-center w-[40%] h-[7%] justify-center flex text-center md:text-4xl text-[#022E75]">
            LAUNDRY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
