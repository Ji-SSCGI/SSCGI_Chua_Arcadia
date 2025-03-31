import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

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

      {/* Navigation Buttons */}
      <button className="carousel-btn prev-btn" onClick={handlePrev}>
        ‹
      </button>
      <button className="carousel-btn next-btn" onClick={handleNext}>
        ›
      </button>

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
