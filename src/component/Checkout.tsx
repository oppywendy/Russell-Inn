import visa from "../assets/visa.png";
import master from "../assets/mastercard.png";
import { FaArrowLeft } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { useState } from "react";
const Checkout = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    zip: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToWhatsapp = () => {
    const phoneNumber = "2349021345423";
    // const phoneNumber = "2348096999444";

    const message = `*New Booking*

    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}

    Address :
    Country: ${data.country}
    Address: ${data.address}
    City: ${data.city}
    ZIP: ${data.zip}
    


    Amount: NGN ${data.price}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <div className="w-full mx-auto lg:px-4 max-h-min justify-center items-center flex font-roboto md:pt-24 pt-16 bg-[#F8F8F8] md:pb-20 pb-16">
      <div className="w-[90%]">
        <div className="flex pt-14 gap-2 items-center">
          <a href="/">
            <FaArrowLeft size={30} />
          </a>
          <h1 className="text-2xl lg:text-4xl font-semibold">CHECKOUT</h1>
        </div>
        <form action="" className="border mt-5 p-5">
          <h2 className="pb-4 text-xl font-semibold">Contact Info</h2>
          <div className="grid lg:grid-cols-2 gap-5">
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full lg:w-[80%] h-12 border border-black px-5"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full lg:w-[80%] h-12 border border-black px-5"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              onChange={handleChange}
              className="w-full lg:w-[80%] h-12 border border-black px-5"
            />
          </div>
          <p className="pt-2 opacity-50">
            This is the email we will send your confirmation to
          </p>
          <h2 className="pt-10 pb-5">ADDRESS</h2>
          <input
            name="country"
            placeholder="Country"
            onChange={handleChange}
            className="h-12 w-full lg:w-[90%] border border-black px-5"
          />
          <div className="grid lg:grid-cols-2 gap-5 pt-10">
            <input
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="w-full lg:w-[80%] h-12 border border-black px-5"
            />
            {/* <input
              name="address2"
              placeholder="Address 2"
              onChange={handleChange}
              className="w-full lg:w-[80%] h-12 border border-black px-5"
            /> */}
            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-full lg:w-[80%] h-12 border border-black px-5"
            />
            <input
              name="zip"
              placeholder="Zip / Postal Code"
              onChange={handleChange}
              className="w-full lg:w-[80%] h-12 border border-black px-5"
            />
          </div>
          <div className="flex pt-10 gap-2">
            <IoBag size={20} />
            <h2 className="pb-4 text-xl font-semibold">Payment</h2>
          </div>
          <p>
            We use secure transmission and encrypted storage to protect your
            personal information.
          </p>
          {/* <p className="font-semibold pt-5">NGN 30,000</p> */}
          <div className="flex gap-5 pt-5 pb-5 opacity-60">
            <img src={visa} alt="" className="w-10 h-7" />
            <img src={master} alt="" className="w-10 h-7" />
          </div>
          <select
            value={data.price}
            onChange={(e) =>
              setData((prev) => ({ ...prev, price: e.target.value }))
            }
            className="w-40 h-12 py-1 border border-gray-300 bg-blue-400 text-white rounded-md text-sm text-center my-3"
          >
            <option value="">Select Room</option>
            <option value="35,000">Standard / 35,000</option>
            <option value="45,000">Deluxe / 45,000</option>
          </select>
        </form>
        <div>
          <div className="border mt-10 lg:mt-16 p-5">
            <h2 className="pb-4 text-xl font-semibold">Policies:</h2>
            <div className="border border-spacing-10 p-5">
              <div className="flex gap-10">
                <div>
                  <p className="font-semibold">Check-in</p>
                  <p>after 12:00 pm</p>
                </div>
                <div>
                  <p className="font-semibold">Check-out</p>
                  <p>before 12:00pm</p>
                </div>
              </div>
              <p className="pt-5 pb-2 lg:pb-5 font-semibold">STANDARD ROOM</p>
              <p className="text-lg opacity-70">Guarantee policy</p>
              <p className="text-lg opacity-70">100% Prepayment</p>
              <p className="text-lg opacity-70">Cancel Policy</p>
              <p className="text-lg opacity-70">Non Refundable</p>
            </div>
          </div>
        </div>
        <div className="border mt-10 lg:mt-5 p-5">
          <h2 className="pb-4 text-xl font-semibold">Acknowledgement</h2>
          <p>
            By completing this booking, I agree with the Booking Conditions.
          </p>
          <div className="flex gap-5 pt-3">
            <input type="checkbox" name="" id="" className="w-10" />
            <p>I agree with the Privacy Terms.</p>
          </div>
        </div>
        <div className="justify-center flex pt-16">
          <button
            type="button"
            onClick={sendToWhatsapp}
            className="hover:bg-[#022E75] w-52 md:h-12 h-10 rounded-lg justify-center items-center flex cursor-pointer bg-blue-600 text-white"
          >
            CONFIRM BOOKING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
