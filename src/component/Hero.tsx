import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";

const Hero = () => {
  return (
    <div className="w-full max-h-min">
      <div>
        <h1 className="text-5xl text-center font-bold mt-10 text-[#022E75] pt-10">
          OUR ROOMS
        </h1>
        <p className="text-xl font-serif pt-5 ml-5">
          Luxurious, exquisite and comfortable are the perfect words that
          describe our rooms
        </p>
        <div className="w-full min-h-max justify-center flex">
          <div className="w-[90%] h-max justify-center">
            <div className="w-full justify-center items-center flex mt-5">
              <div className="w-[50%]">
                <h1 className="text-4xl font-sans font-semibold">
                  Luxury redefined
                </h1>
                <p className="text-xl font-sans">
                  Our rooms are designed to transport you into an environment
                  made for leisure. Take your mind off the day-to-day of home
                  life and find a private paradise for yourself
                </p>
                <div className=" flex justify-center pt-5">
                  <button className="hover:bg-[#022E75] w-32 h-8 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                    <a href="https://wa.me/2348096999444">BOOK NOW</a>
                  </button>
                </div>
              </div>
              <div className="w-[50%]">
                <img src={room1} alt="" />
              </div>
            </div>
            <div className="w-full justify-center items-center flex mt-10">
              <div className="w-[50%]">
                <h1 className="text-4xl font-sans font-semibold">
                  Hospitality at its peak
                </h1>
                <p className="text-xl font-sans">
                  Our mission is to provide exceptional hospitality, comfort,
                  and value to our guests, while fostering a culture of
                  excellence, integrity, and community involvement.
                </p>
                <div className=" flex justify-center pt-5">
                  <button className="hover:bg-[#022E75] w-32 h-8 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                    <a href="https://wa.me/2348096999444">BOOK NOW</a>
                  </button>
                </div>
              </div>
              <div className="w-[50%]">
                <img src={room2} alt="" />
              </div>
            </div>
            <div className="mt-14 justify-center flex items-center">
              <p className="text-4xl text-center">
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
