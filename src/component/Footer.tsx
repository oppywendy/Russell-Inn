import pic from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center bg-black text-white">
        <div className="w-[90%] flex flex-col md:flex-row">
          <div className="md:w-[30%]">
            <ul className="">
              <li className=" md:pt-5 pt-2 font-serif">ABOUT</li>
              <li className="md:pt-5 pt-2 font-serif">GALLERY</li>
              <li className="md:pt-5 pt-2 font-serif">ABOUT US</li>
              <li className="md:pt-5 pt-2 font-serif">TESTIMONIALS</li>
              <li className="md:pt-5 pt-2 font-serif">CONTACT US</li>
              <li className="md:pt-5 pt-2 font-serif">TERMS & CONDITIONS</li>
            </ul>
          </div>

          <div className="md:w-[30%] justify-center items-center flex">
            <div>
              <p className="md:pt-5 pt-2 font-serif md:text-xl">
                Address: 141d Gbagada Oworonshoki Expressway Phase 1 Lagos
              </p>
              <p className="pt-1 font-serif md:text-xl">
                Call us: +2349157755555
              </p>
              <p className="pt-1 font-serif md:text-xl">
                Whatsapp: +2348096999444
              </p>
              <p className="pt-1 font-serif md:text-xl">
                Email: russellinn9@gmail.com
              </p>
            </div>
          </div>
          <div className=" justify-center items-center flex md:w-[40%]">
            <img
              className="w-[20rem] justify-center flex items-center"
              src={pic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
