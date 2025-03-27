import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="mt-10 bg-[#F8F8F8] pb-5">
      <div>
        <h1 className="font-bold text-5xl text-center text-[#022E75] pt-10">
          CONTACT US
        </h1>
        <div className="w-full flex mt-5">
          <div className="w-[50%]">
            <h1 className="font-semibold text-3xl text-center">INFORMATION</h1>
            <div className="w-full items-center justify-center flex pt-5">
              <div className=" justify-center flex pt-5 w-[80%]">
                <div>
                  <div className="flex gap-5 items-center">
                    <FaLocationDot size={40} />
                    <p className="font-mono text-2xl">
                      141d Gbagada Oworonshoki Expressway Phase 1 Lagos
                    </p>
                  </div>
                  <div className="flex gap-5 items-center pt-5">
                    <PiPhoneCall size={40} />
                    <p className="font-mono text-2xl">+2348106994357</p>
                  </div>
                  <div className="flex gap-5 items-center pt-5">
                    <FaWhatsapp size={40} />
                    <p className="font-mono text-2xl">+2348096999444</p>
                  </div>
                  <div className="flex gap-5 items-center pt-5">
                    <MdEmail size={40} />
                    <p className="font-mono text-2xl">russellinn9@gmail.com</p>
                  </div>
                  <div className="flex gap-5 items-center pt-5">
                    <FaInstagramSquare size={40} />
                    <p className="font-mono text-2xl">_russellinn_</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] bg-blue-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7204203901574!2d3.3675689739386874!3d6.556934822776075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d2e390f94bb%3A0xcf6a2e3c1674266a!2sRussellinn!5e0!3m2!1sen!2sng!4v1743074280046!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
