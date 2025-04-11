import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true); // Track if the carousel is in automatic mode
  const totalItems = items.length;

  // Handle navigation
  const handleNext = () => {
    setIsAuto(false); // Disable auto mode when manually changing slides
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setIsAuto(false); // Disable auto mode when manually changing slides
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleDotClick = (index) => {
    setIsAuto(false); // Disable auto mode when clicking dots
    setCurrentIndex(index);
  };

  // Automatic slide change
  useEffect(() => {
    if (isAuto) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Change every 3 seconds (you can adjust this value)

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAuto]); // Dependency array includes currentIndex and isAuto

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div className="focus-item" key={index}>
            <img src={item.image} alt={`Project ${index + 1}`} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
