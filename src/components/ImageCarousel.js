import React, { useEffect, useState } from "react";
import "../App.css";

function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % props.images.length);
    }, props.interval || 3000);

    return () => clearTimeout(timer);
  }, [activeIndex, props]);

  return (
    <div className="carousel">
      {props.images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${activeIndex === index ? "active" : ""}`}
        >
          <img src={image} alt="flagstaff" />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
