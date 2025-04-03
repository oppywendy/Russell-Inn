import pic from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="font-roboto w-full">
      <div className="flex w-full justify-center items-center text-white bg-black pb-5">
        <div className="w-[98%] flex flex-col md:flex-row">
          <div className=" justify-center items-center flex md:w-[30%]">
            <img
              className="w-[20rem] justify-center flex items-center"
              src={pic}
              alt=""
            />
          </div>

          <div className="md:w-[30%] md:justify-center flex">
            <ul className="">
              <li className=" md:pt-5 pt-2 ">ABOUT</li>
              <li className="md:pt-5 pt-2 ">GALLERY</li>
              <li className="md:pt-5 pt-2">ABOUT US</li>
              <li className="md:pt-5 pt-2">TESTIMONIALS</li>
              <li className="md:pt-5 pt-2">CONTACT US</li>
              <li className="md:pt-5 pt-2">TERMS & CONDITIONS</li>
            </ul>
          </div>

          <div className="md:w-[40%] md:justify-center flex">
            <div>
              <p className="md:pt-5 pt-2 md:text-xl">
                Address: 141d Gbagada Oworonshoki Expressway Phase 1 Lagos
              </p>
              <p className="pt-1 md:text-xl">Call us: +2349157755555</p>
              <p className="pt-1 md:text-xl">Whatsapp: +2348096999444</p>
              <p className="pt-1 md:text-xl">Email: russellinn9@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
