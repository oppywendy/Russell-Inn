import pic1 from "../assets/WhatsApp Image 2025-03-26 at 11.21.23_e0fb667c.jpg";
import pic2 from "../assets/WhatsApp Image 2025-03-26 at 11.21.58_6af15d99.jpg";
import pic3 from "../assets/party.png";
import pic4 from "../assets/DNZR0033.png";
import pic5 from "../assets/YAHM1877.png";

const Event = () => {
  return (
    <div className="m-10">
      <div>
        <h1 className="font-bold md:text-5xl text-3xl text-center text-[#022E75] pt-10">
          MEETINGS & EVENTS
        </h1>
        <div className="w-[100%] flex pt-5 justify-center items-center flex-col md:flex-row">
          <div className="md:w-[50%] w-full">
            <h2 className="font-semibold md:text-5xl text-2xl md:w-[60%] font-sans">
              Ocassions to remember
            </h2>
            <div className="">
              <i className="md:text-3xl text-lg justify-center flex md:pt-10 pt-3">
                We are the perfect host for your weddings. We can make your
                ceremonies remain timeless by redefining them with unprecedented
                glitz and glamour. Our meeting rooms are equipped with the
                latest audio-visual technology , fast and secured Wi-Fi and so
                much more. Place a call with us today to explore your options.
              </i>
              <img className="md:pt-10 pt-2" src={pic5} alt="" />
            </div>
          </div>
          <div className="md:w-[50%] grid grid-cols-2 gap-1 ">
            <img className="w-[20rem]" src={pic1} alt="" />
            <img className="w-[20rem]" src={pic2} alt="" />
            <img className="w-[20rem]" src={pic3} alt="" />
            <img className="w-[20rem]" src={pic4} alt="" />
          </div>
        </div>
        <div className="justify-center flex md:pt-5 pt-2">
          <button className="hover:bg-[#022E75] w-40 md:h-12 h-8 rounded-lg border border-black justify-center items-center flex cursor-pointer bg-blue-600 text-white">
            <a href="https://wa.me/2348096999444">CHECK AVAILABILITY</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
