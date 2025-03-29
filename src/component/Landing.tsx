import pic from "../assets/lounge6.png";

const Landing = () => {
  return (
    <div className="w-full md:h-screen pt-20 md:pt-0">
      <div
        className="bg-cover bg-center md:h-screen h-[40vh] w-full bg-blue-900 bg-opacity-50 bg-blend-overlay"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="md:w-[60%] w-[70%] md:h-[90%] h-[80%] items-center justify-center flex text-white">
          <div className="pl-5 md:pl-0">
            <h1 className="md:text-4xl text-xl">WELCOME TO</h1>
            <h1 className="md:text-8xl text-3xl">RUSSELL INN</h1>
            <p className="md:text-xl text-lg">Making ordinary extraordinary</p>
          </div>
        </div>
        <div className=" flex justify-center md:h-[10%] h-[20%]">
          <button className="hover:bg-[#022E75] w-40 h-12 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
            <a href="https://wa.me/2348096999444">BOOK NOW</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
