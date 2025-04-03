import pic from "../assets/lounge6.png";

const Landing = () => {
  return (
    <div className="w-full md:h-screen pt-20 md:pt-0 font-roboto">
      <div
        className="bg-cover bg-center md:h-screen h-[50vh] w-full bg-blue-900 bg-opacity-50 bg-blend-overlay"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="md:w-[70%] w-[75%] md:h-[90%] h-[85%] items-center justify-center flex text-white">
          <div className="pl-5 md:pl-0">
            <h1 className="md:text-4xl text-lg">WELCOME TO</h1>
            <h1 className="md:text-8xl text-2xl">RUSSELL INN</h1>
            <p className="md:text-xl text-sm">Making ordinary extraordinary</p>
            <p className="md:text-xl text-sm">
              We offer 24/7 amenities, including 24hours power supply, security,
              wifi
            </p>
            <p className="md:text-xl text-sm">
              Convenient location near Muritala Muhammed International Airport,
              Domestic Airport,Lagos Island
            </p>
            <p className="md:text-xl text-sm">
              Book your stay today and experience our warm hospitality
            </p>
          </div>
        </div>
        <div className=" flex justify-center md:h-[10%] h-[15%]">
          <button className="hover:bg-[#022E75] md:w-40 w-36 md:h-12 h-10 rounded-lg justify-center items-center flex cursor-pointer bg-blue-600 text-white">
            <a href="https://wa.me/2348096999444">BOOK NOW</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
