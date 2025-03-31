import vid1 from "../assets/video1.webm";
import vid3 from "../assets/video8.webm";
import vid4 from "../assets/video5.webm";
import vid5 from "../assets/video11.webm";
import vid6 from "../assets/video6.webm";
import vid7 from "../assets/video9.webm";
import vid8 from "../assets/video10.webm";
import pic1 from "../assets/lounge1.png";
import pic2 from "../assets/lounge6.png";
import pic3 from "../assets/lounge.png";
import pic5 from "../assets/customer1.png";
import pic6 from "../assets/room1.png";
import pic7 from "../assets/room2.png";
import pic8 from "../assets/room3.png";
import vid2 from "../assets/video2.webm";
import pic9 from "../assets/lounge2.png";
import pic10 from "../assets/food6.png";
import pic11 from "../assets/customer2.png";
import pic12 from "../assets/customer3.png";
import pic13 from "../assets/lounge3.png";
import pic14 from "../assets/reception.png";
import pic15 from "../assets/lounge7.png";
import pic16 from "../assets/food9.png";
import pic17 from "../assets/food1.png";
import pic18 from "../assets/food2.png";
import pic19 from "../assets/WhatsApp Image 2025-03-26 at 11.21.58_6af15d99.jpg";
import pic20 from "../assets/DNZR0033.png";

const Photos = () => {
  return (
    <div className="w-full pt-10 mb-5 justify-center items-center flex">
      <div className="w-[90%]">
        <h1 className="md:text-5xl text-3xl text-center font-bold md:mt-10 mt-2 text-[#022E75] pt-10">
          OUR GALLERY
        </h1>
        <div className="grid md:grid-cols-3 gap-5 pt-5">
          <video
            className="w-[25rem] h-[18rem]"
            autoPlay
            loop
            controls
            muted
            src={vid6}
          ></video>
          <img className="w-[25rem] h-[18rem]" src={pic2} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic1} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic3} alt="" />
          <video
            className="w-[25rem] h-[18rem]"
            autoPlay
            loop
            controls
            muted
            src={vid4}
          ></video>
          <img className="w-[25rem] h-[18rem]" src={pic5} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic6} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic7} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic8} alt="" />
          <img className="w-[25rem] h-[18rem]" src={pic9} alt="" />
          <video
            className="w-[25rem] h-[18rem]"
            autoPlay
            loop
            controls
            muted
            src={vid2}
          ></video>
          <img className="w-[25rem] h-[18rem]" src={pic10} alt="" />
          <video
            className="w-[25rem] h-[18rem]"
            autoPlay
            loop
            controls
            muted
            src={vid3}
          ></video>
          <video
            className="w-[25rem] h-[18rem]"
            autoPlay
            loop
            controls
            muted
            src={vid5}
          ></video>
          <video
            className="w-[25rem] h-[18rem]"
            autoPlay
            loop
            controls
            muted
            src={vid1}
          ></video>
          <img className="w-[25rem] h-[30rem]" src={pic11} alt="" />
          <img className="w-[25rem] h-[30rem]" src={pic12} alt="" />
          <img className="w-[25rem] h-[30rem]" src={pic13} alt="" />
          <img className="w-[25rem] h-[30rem]" src={pic14} alt="" />
          <video
            className="w-[25rem] h-[30rem]"
            autoPlay
            loop
            controls
            muted
            src={vid7}
          ></video>
          <img className="w-[25rem] h-[30rem]" src={pic15} alt="" />
          <img className="w-[25rem] h-[30rem]" src={pic16} alt="" />
          <img className="w-[25rem] h-[30rem]" src={pic17} alt="" />
          <img className="w-[25rem] h-[30rem]" src={pic18} alt="" />
          <video
            className="w-[25rem] h-[30rem]"
            autoPlay
            loop
            controls
            muted
            src={vid8}
          ></video>
          <img className="w-[25rem] h-[30rem]" src={pic19} alt="" />
          <img className="w-[25rem] h-[30rem]" src={pic20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Photos;
