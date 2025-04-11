import React, { useState, useEffect } from "react";

const EventCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true); // Track if the carousel is in automatic mode

  // Default items per page, adjust based on the number of events
  const itemsPerPage = 3;
  const totalItems = items.length;

  // Recalculate the total number of dots based on the number of items
  const totalDots = Math.ceil(totalItems / itemsPerPage);

  // Group the items into arrays representing each "page" (dot)
  const groupedItems = Array.from({ length: totalDots }, (_, index) =>
    items.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
  );

  // Handle navigation (Next and Previous)
  const handleNext = () => {
    setIsAuto(false); // Disable auto mode when manually changing slides
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalDots);
  };

  const handlePrev = () => {
    setIsAuto(false); // Disable auto mode when manually changing slides
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalDots) % totalDots);
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
      }, 30000); // Change every 30 seconds (adjustable)

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [currentIndex, isAuto]);

  // Dynamically calculate the width of each item based on the number of items per page
  const itemWidth = `${100 / itemsPerPage}%`;

  return (
    <div className="event-carousel">
      {/* Carousel Track */}
      <div
        className="event-carousel-track"
        style={{
          transform: `translateX(-${(currentIndex / totalDots) * 100}%)`,
        }}
      >
        {groupedItems[currentIndex]?.map((item, index) => (
          <div
            className="event-carousel-item"
            key={index}
            style={{ width: itemWidth }} // Dynamically set the width of each item
          >
            <img src={item.eventImg} alt={`Event ${index + 1}`} className="event-carousel-image" />
            <div className="event-carousel-content">
              <h4>{item.eventTitle}</h4>
              <p>{item.eventDescription}</p>

              {/* Conditionally render buttons based on eventStatus */}
              {item.eventStatus === "Upcoming" ? (
                <>
                  {item.registrationURL && (
                    <button className="event-btn-primary event-f-btn">
                      <a href={item.registrationURL} target="_blank" rel="noopener noreferrer">
                        Register
                      </a>
                    </button>
                  )}
                  <button className="event-btn-secondary event-f-btn">
                    <a href={`/learn-more/${item._id}`} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </button>
                </>
              ) : item.eventStatus === "Completed" ? (
                <button className="event-btn-primary event-f-btn">
                  <a href={`/read-more/${item._id}`} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {!isAuto && (
        <>
          <button className="event-carousel-btn event-prev-btn" onClick={handlePrev}>
            ‹
          </button>
          <button className="event-carousel-btn event-next-btn" onClick={handleNext}>
            ›
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {totalDots > 1 && (
        <div className="event-carousel-indicators">
          {Array.from({ length: totalDots }, (_, index) => (
            <span
              key={index}
              className={`event-dot ${currentIndex === index ? "event-active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCarousel;
