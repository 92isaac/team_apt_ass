import { motion } from "framer-motion";
import { useState } from "react";

const carouselData = [
  {
    id: 1,
    image: "https://source.unsplash.com/user/500/1600x900",
    caption: "Image 1",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/user/c_v_r/1600x900",
    caption: "Image 2",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/user/c_v_r/1600x900",
    caption: "Image 3",
  },
];

const HeroAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const imageWidth = 100;

  return (
    <div className="relative w-full h-64">
      <div className="flex w-full h-full overflow-hidden">
        <motion.div
          className="flex w-full h-full"
          animate={{ x: -activeIndex * imageWidth }}
          transition={{ type: "tween", duration: 0.5 }}
          style={{ width: `${carouselData.length * imageWidth}%` }}
        >
        
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${carouselData[0].image})`, }}
            />
      
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
        <button
          className="mx-4 p-2 rounded-full bg-white opacity-50 hover:opacity-100"
          onClick={onPrev}
        >
          Prev
        </button>
        <button
          className="mx-4 p-2 rounded-full bg-white opacity-50 hover:opacity-100"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HeroAnimation;
