import { motion } from "framer-motion";
import { useState } from "react";

const carouselData = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      caption: "Image 1",
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      caption: "Image 2",
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      caption: "Image 3",
    },
  ];
  

  const HeroAnimation =()=>{
      const [activeIndex, setActiveIndex] = useState(0);

      const handleNext = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
      };
      
      const handlePrev = () => {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
      };
      

      return (<motion.div
        className="carousel"
        animate={{ marginLeft: `-${activeIndex * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {carouselData.map((slide) => (
          <motion.div
            key={slide.id}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="caption">{slide.caption}</div>
          </motion.div>
        ))}
      </motion.div>
      )
  }
  export default HeroAnimation;