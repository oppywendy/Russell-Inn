import { Link } from "react-router-dom";
import pic from "../assets/video2.webm";

const Landing = () => {
  return (
    <div className="w-full md:h-screen pt-20 md:pt-0 font-roboto relative overflow-hidden">
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={pic} type="video/webm" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/30"></div>
        <div className="relative z-20 flex flex-col justify-between md:h-screen h-screen text-white">
          <div className="md:w-[70%] w-[75%] md:h-[90%] h-[80%] items-center mx-5 flex my-auto pt-52">
            <div>
              <h1 className="md:text-4xl text-lg">WELCOME TO</h1>
              <h1 className="md:text-8xl text-2xl">RUSSELL INN</h1>
              <p className="md:text-xl text-sm">
                Making ordinary extraordinary
              </p>
              <p className="md:text-xl text-sm">
                We offer 24/7 amenities, including 24hours power supply,
                security, wifi
              </p>
              <p className="md:text-xl text-sm">
                Convenient location near Muritala Muhammed International
                Airport, Domestic Airport,Lagos Island
              </p>
              <p className="md:text-xl text-sm">
                Book your stay today and experience our warm hospitality
              </p>
            </div>
          </div>
          <div className=" flex justify-center md:h-[10%] h-[20%]">
            <button className="hover:bg-[#022E75] md:w-40 w-36 md:h-12 h-10 rounded-lg justify-center items-center flex bg-blue-600">
              <Link to="checkout">BOOK NOW</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
