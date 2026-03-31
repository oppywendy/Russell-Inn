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
import pic10 from "../assets/customer7.png";
import pic11 from "../assets/customer2.png";
import pic12 from "../assets/customer3.png";
import pic13 from "../assets/lounge3.png";
import pic14 from "../assets/reception.png";
import pic15 from "../assets/snooker1.jpg";
import pic16 from "../assets/food9.png";
import pic17 from "../assets/food1.png";
import pic18 from "../assets/food2.png";
import pic19 from "../assets/WhatsApp Image 2025-03-26 at 11.21.58_6af15d99.jpg";
import pic20 from "../assets/DNZR0033.png";
import pic21 from "../assets/customer4.png";
import pic22 from "../assets/customer5.png";
import pic23 from "../assets/customer6.png";
import pic24 from "../assets/snooker3.jpg";
import vid9 from "../assets/snooker5.mp4";
import pic25 from "../assets/snooker4.jpg";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const photos = [
  { id: 1, type: "video", src: vid1 },
  { id: 2, type: "video", src: vid3 },
  { id: 3, type: "video", src: vid4 },
  { id: 4, type: "video", src: vid5 },
  { id: 5, type: "video", src: vid6 },
  { id: 6, type: "video", src: vid7 },
  { id: 7, type: "video", src: vid8 },

  { id: 8, type: "image", src: pic1 },
  { id: 9, type: "image", src: pic2 },
  { id: 10, type: "image", src: pic3 },
  { id: 11, type: "image", src: pic5 },
  { id: 12, type: "image", src: pic6 },
  { id: 13, type: "image", src: pic7 },
  { id: 14, type: "image", src: pic8 },

  { id: 15, type: "video", src: vid2 },

  { id: 16, type: "image", src: pic9 },
  { id: 17, type: "image", src: pic10 },
  { id: 18, type: "image", src: pic11 },
  { id: 19, type: "image", src: pic12 },
  { id: 20, type: "image", src: pic13 },
  { id: 21, type: "image", src: pic14 },
  { id: 22, type: "image", src: pic15 },
  { id: 23, type: "image", src: pic16 },
  { id: 24, type: "image", src: pic17 },
  { id: 25, type: "image", src: pic18 },
  { id: 26, type: "image", src: pic19 },
  { id: 27, type: "image", src: pic20 },
  { id: 28, type: "image", src: pic21 },
  { id: 29, type: "image", src: pic22 },
  { id: 30, type: "image", src: pic23 },
  { id: 31, type: "image", src: pic24 },

  { id: 32, type: "video", src: vid9 },
  { id: 33, type: "image", src: pic25 },
];

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! + 1) % photos.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! - 1 + photos.length) % photos.length);
      }

      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "auto";
  }, [selectedImage]);

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setSelectedImage((prev) => (prev! + 1) % photos.length);
    }

    if (distance < -minSwipeDistance) {
      setSelectedImage((prev) => (prev! - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="w-full pt-16 md:pb-20 pb-16 flex justify-center items-center font-roboto bg-[#F8F8F8]">
      <div className="w-[90%]">
        <h1 className="md:text-5xl text-3xl text-center font-bold text-[#022E75] pt-10">
          OUR GALLERY
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
          {photos.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  loading="lazy"
                  decoding="async"
                  alt="Gallery"
                  onClick={() => setSelectedImage(index)}
                  className="w-full h-[160px] md:h-[300px] lg:h-[400px] object-cover cursor-pointer blur-sm transition duration-300"
                  onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  onClick={() => setSelectedImage(index)}
                  className="w-full h-[160px] md:h-[300px] lg:h-[400px] object-cover cursor-pointer"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-5 right-5 bg-white/10 text-[#d4af37] px-4 py-2 rounded-full z-50"
                >
                  X
                </button>

                {/* PREV */}
                <button
                  onClick={() =>
                    setSelectedImage(
                      (prev) => (prev! - 1 + photos.length) % photos.length,
                    )
                  }
                  className="hidden md:block absolute left-5 text-white text-4xl"
                >
                  ‹
                </button>

                {/* MEDIA */}
                {photos[selectedImage].type === "image" ? (
                  <motion.img
                    src={photos[selectedImage].src}
                    className="w-screen h-screen object-contain"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  />
                ) : (
                  <motion.video
                    src={photos[selectedImage].src}
                    autoPlay
                    controls
                    className="w-screen h-screen object-contain"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  />
                )}

                {/* NEXT */}
                <button
                  onClick={() =>
                    setSelectedImage((prev) => (prev! + 1) % photos.length)
                  }
                  className="hidden md:block absolute right-5 text-white text-4xl"
                >
                  ›
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Photos;
