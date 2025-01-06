import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  console.log("items: " + items);

  const overlayStyles = `absolute invisible md:visible h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const smallOverlayStyles = `absolute invisible md:visible h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-8 md:p-10 text-md text-deep-blue`;

  const slideVariants = {
    hiddenRight: {
      x: 0,
      opacity: 0,
    },
    hiddenLeft: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === items.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="relative items-center h-2/3 w-2/3 md:h-full md:w-full m-auto rounded">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          >
          <div className={overlayStyles}>
              <p className="text-2xl font-playfair">{items[currentIndex].title}</p>
              <p className="text-lg font-playfair">{items[currentIndex].description}</p>
          </div>
          <a href={items[currentIndex].link} target="_blank" rel="noreferrer">
            <img className="w-full h-full" src={items[currentIndex].path} alt={items[currentIndex].path} />
          </a>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between w-full">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="absolute grid place-items-center items-center w-1/2 h-1/2 rounded top-14 md:top-28 -left-40 md:-left-64"
            onClick={handlePrevious}
          >
            <div className={smallOverlayStyles}>
              <p className="text-xl font-playfair">{items[currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1].title}</p>
              <p className="text-sm font-playfair">{items[currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1].description}</p>
            </div>
            <img className="w-full h-full bg-grey opacity-70 hover:opacity-90" src={items[currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1].path} />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="absolute grid place-items-center items-center w-1/2 h-1/2 rounded top-14 md:top-28 -right-40 md:-right-64"
            onClick={handleNext}
          >
            <div className={smallOverlayStyles}>
              <p className="text-xl font-playfair">{items[currentIndex + 1 === items.length ? 0 : currentIndex + 1].title}</p>
              <p className="text-sm font-playfair">{items[currentIndex + 1 === items.length ? 0 : currentIndex + 1].description}</p>
            </div>
            <img className="w-full h-full opacity-70 hover:opacity-90" src={items[currentIndex + 1 === items.length ? 0 : currentIndex + 1].path} />
          </motion.div>
        </div>
      </div>
      <div className="carousel-indicator">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;