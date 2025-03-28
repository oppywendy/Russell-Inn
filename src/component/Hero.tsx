import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";

const Hero = () => {
  return (
    <div className="w-full max-h-min">
      <div>
        <h1 className="md:text-5xl text-3xl text-center font-bold md:mt-10 mt-2 text-[#022E75] pt-10">
          OUR ROOMS
        </h1>
        <p className="text-xl font-serif pt-5 ml-5">
          Luxurious, exquisite and comfortable are the perfect words that
          describe our rooms
        </p>
        <div className="w-full min-h-max justify-center flex">
          <div className="w-[90%] h-max justify-center">
            <div className="w-full justify-center items-center flex mt-5 flex-col-reverse md:flex-row">
              <div className="md:w-[50%] w-[90%]">
                <h1 className="md:text-4xl text-2xl font-sans font-semibold pt-3 md:pt-0">
                  Luxury redefined
                </h1>
                <p className="md:text-xl text-lg font-sans pt-1 md:pt-0">
                  Our rooms are designed to transport you into an environment
                  made for leisure. Take your mind off the day-to-day of home
                  life and find a private paradise for yourself
                </p>
                <div className=" flex justify-center md:pt-5 pt-2">
                  <button className="hover:bg-[#022E75] w-32 h-8 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                    <a href="https://wa.me/2348096999444">BOOK NOW</a>
                  </button>
                </div>
              </div>
              <div className="md:w-[50%] w-[90%]">
                <img src={room1} alt="" />
              </div>
            </div>
            <div className="w-full justify-center items-center flex mt-10 flex-col-reverse md:flex-row">
              <div className="md:w-[50%] w-[90%]">
                <h1 className="md:text-4xl text-2xl font-sans font-semibold pt-3 md:pt-0">
                  Hospitality at its peak
                </h1>
                <p className="md:text-xl text-lg font-sans pt-1 md:pt-0">
                  Our mission is to provide exceptional hospitality, comfort,
                  and value to our guests, while fostering a culture of
                  excellence, integrity, and community involvement.
                </p>
                <div className=" flex justify-center md:pt-5 pt-2">
                  <button className="hover:bg-[#022E75] w-32 h-8 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                    <a href="https://wa.me/2348096999444">BOOK NOW</a>
                  </button>
                </div>
              </div>
              <div className="md:w-[50%] w-[90%]">
                <img src={room2} alt="" />
              </div>
            </div>
            <div className="md:mt-14 mt-4 justify-center flex items-center">
              <p className="md:text-4xl text-2xl text-center">
                Whether you are in town for business or pleasure, you can be
                certain of having a great stay in any of our spacious luxurious
                guest rooms and suites
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
