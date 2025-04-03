import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";

const Hero = () => {
  return (
    <div className="w-full max-h-min justify-center items-center flex font-roboto md:pt-24 pt-16 bg-[#F8F8F8] md:pb-20 pb-16">
      <div className="w-[90%]">
        <h1 className="md:text-5xl text-3xl text-center font-bold text-[#022E75]">
          OUR ROOMS
        </h1>
        <div className="w-full min-h-max justify-center flex md:pt-16 pt-10">
          <div className="w-[90%] h-max justify-center">
            <div className="w-full justify-center items-center flex pt-5 flex-col-reverse md:flex-row">
              <div className="md:w-[50%] w-[90%]">
                <h1 className="md:text-4xl text-2xl font-semibold pt-5 md:pt-0">
                  Luxury redefined
                </h1>
                <p className="md:text-xl text-lg pt-1 md:pt-0 md:pr-2">
                  Our rooms are designed to transport you into an environment
                  made for leisure. Take your mind off the day-to-day of home
                  life and find a private paradise for yourself
                </p>
                <div className=" flex justify-center pt-10">
                  <button className="hover:bg-[#022E75] md:w-40 w-36 md:h-12 h-10 rounded-lg justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                    <a href="https://wa.me/2348096999444">BOOK NOW</a>
                  </button>
                </div>
              </div>
              <div className="md:w-[50%] w-[90%]">
                <img src={room1} alt="" />
              </div>
            </div>
            <div className="w-full justify-center items-center flex pt-14 flex-col-reverse md:flex-row">
              <div className="md:w-[50%] w-[90%]">
                <h1 className="md:text-4xl text-2xl font-semibold pt-5 md:pt-0">
                  Hospitality at its peak
                </h1>
                <p className="md:text-xl text-lg pt-1 md:pt-0">
                  Our mission is to provide exceptional hospitality, comfort,
                  and value to our guests, while fostering a culture of
                  excellence, integrity, and community involvement.
                </p>
                <div className=" flex justify-center pt-10">
                  <button className="hover:bg-[#022E75] md:w-40 w-36 md:h-12 h-10 rounded-lg justify-center items-center flex cursor-pointer bg-blue-600 text-white">
                    <a href="https://wa.me/2348096999444">BOOK NOW</a>
                  </button>
                </div>
              </div>
              <div className="md:w-[50%] w-[90%]">
                <img src={room2} alt="" />
              </div>
            </div>
            <div className="md:pt-14 pt-10 justify-center flex items-center">
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
