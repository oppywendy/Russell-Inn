import pic1 from "../assets/lounge6.png";
import pic2 from "../assets/snooker3.jpg";
import pic3 from "../assets/lounge1.png";
import pic4 from "../assets/room1.png";
import pic5 from "../assets/room2.png";
import pic6 from "../assets/lounge.png";
import { Link } from "react-router-dom";

const photos = [
  {
    id: 1,
    image: pic1,
  },
  {
    id: 2,
    image: pic2,
  },
  {
    id: 3,
    image: pic3,
  },
  {
    id: 4,
    image: pic4,
  },
  {
    id: 5,
    image: pic5,
  },
  {
    id: 6,
    image: pic6,
  },
];

const Gallery = () => {
  return (
    <div className="w-full min-h-full md:pt-24 pt-16 font-roboto md:pb-20 pb-16 bg-[#F8F8F8]">
      <div>
        <div>
          <h1 className="font-bold md:text-5xl text-3xl text-center text-[#022E75]">
            OUR GALLERY
          </h1>
        </div>

        <div className="w-full lg:pt-16 pt-10 lg:grid flex md:grid-cols-3 md:gap-5 overflow-x-auto overflow-hidden no-scrollbar group lg:space-x-0 space-x-5 p-5">
          {photos.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg min-w-[300px] lg:min-w-0"
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="w-full h-72 lg:h-80 object-cover rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="justify-center flex md:pt-16 pt-10">
          <button className="hover:bg-[#022E75] md:w-40 w-36 md:h-12 h-10 rounded-lg justify-center items-center flex cursor-pointer bg-blue-600 text-white">
            <Link to="/gallery">VIEW MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
