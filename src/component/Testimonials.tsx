import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="md:pt-24 pt-16 md:pb-20 pb-16 w-full font-roboto bg-[#F8F8F8]">
      <div>
        <h1 className="font-bold md:text-5xl text-3xl text-center text-[#022E75]">
          TESTIMONIALS
        </h1>
        <div className="w-full justify-center items-center flex md:pt-12 pt-10">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="md:w-[25rem] w-[20rem] md:h-[12rem] h-[18rem] border rounded-2xl bg-blue-300 justify-center items-center flex mt-5">
              <div className="w-[90%] h-[90%]">
                <div className="flex h-[10%]">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
                <p className=" italic h-[80%] items-center flex">
                  "Russell Inn is a true gem in the heart of Gbagada, offering a
                  perfect blend of luxury and convenience. The location was
                  ideal for exploring the area, and the staff were incredibly
                  helpful with recommendations."
                </p>
                <p className="font-semibold h-[10%]">Lawrence P</p>
              </div>
            </div>
            <div className="md:w-[25rem] w-[20rem] md:h-[12rem] h-[18rem] border rounded-2xl bg-blue-300 justify-center items-center flex mt-5">
              <div className="w-[90%] h-[90%]">
                <div className="flex h-[10%]">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
                <p className=" italic h-[80%] items-center flex">
                  "I had a great time, the rooms are very comfortable, the bar
                  was great! The staff were very friendly, Really nice
                  cocktails, delicious food and a very cozy ambience! I will
                  definitely be returning"
                </p>
                <p className="font-semibold h-[10%]">Emike E</p>
              </div>
            </div>
            <div className="md:w-[25rem] w-[20rem] md:h-[12rem] h-[18rem] border rounded-2xl bg-blue-300 justify-center items-center flex mt-5">
              <div className="w-[90%] h-[90%]">
                <div className="flex h-[10%]">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
                <p className=" italic h-[80%] items-center flex">
                  "World class experience. I loved the outside bar!! 10/10 place
                  - would surely recommend"
                </p>
                <p className="font-semibold h-[10%]">David P</p>
              </div>
            </div>
            <div className="md:w-[25rem] w-[20rem] md:h-[12rem] h-[18rem] border rounded-2xl bg-blue-300 justify-center items-center flex mt-5">
              <div className="w-[90%] h-[90%]">
                <div className="flex h-[10%]">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
                <p className=" italic h-[80%] items-center flex">
                  "I had the most amazing time here last night. The cocktail and
                  the food? Divine!!! The service and the rooms were top notch
                  and the staff were really helpful and friendly. I loved every
                  minute there."
                </p>
                <p className="font-semibold h-[10%]">Zenani C</p>
              </div>
            </div>
            <div className="md:w-[25rem] w-[20rem] md:h-[12rem] h-[18rem] border rounded-2xl bg-blue-300 justify-center items-center flex mt-5">
              <div className="w-[90%] h-[90%]">
                <div className="flex h-[10%]">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
                <p className=" italic h-[80%] items-center flex">
                  "Top-notch service and very tasty meals (you should definitely
                  try their jollof rice and turkey). The rooms are very neat and
                  smell really nice too. It’s also situated in a nice area
                  although it’s a bit tricky to locate so contact them for
                  directions."
                </p>
                <p className="font-semibold h-[10%]">Emmanuel E</p>
              </div>
            </div>
            <div className="md:w-[25rem] w-[20rem] md:h-[12rem] h-[18rem] border rounded-2xl bg-blue-300 justify-center items-center flex mt-5">
              <div className="w-[90%] h-[90%]">
                <div className="flex h-[10%]">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="" />
                </div>
                <p className=" italic h-[80%] items-center flex">
                  "Lovely ambience, lovely staff, good food, good services. Love
                  it!"
                </p>
                <p className="font-semibold h-[10%]">Judy E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
