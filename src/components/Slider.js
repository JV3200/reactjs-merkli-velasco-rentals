import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import image1 from "../assets/images/historic-downtown-flagstaff.jpg";
import image2 from "../assets/images/0422_Shonto_OPEN.jpeg";
import image3 from "../assets/images/storefront.jpeg";
// import image4 from "../assets/images/kalen-kemp-bvsVcxjJJ6M-unsplash.jpg";
import image5 from "../assets/images/livingroom.jpeg";
import "../App.css";

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      (
      <Carousel.Item>
        <img className="d-block" src={image3} alt="First slide" />
        <Carousel.Caption className="c-caption">
          <h3>Storefronts</h3>
          <p>
            Merkli Velasco Rentals commercial storefront spaces in downtown
            Flagstaff are a prime location for any business. Located in the
            heart of the city, this space is surrounded by a vibrant community
            and is easily accessible to both locals and tourists. This
            commercial storefront space is the perfect place to grow and thrive
            in downtown Flagstaff Arizona.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      )
      <Carousel.Item>
        <img className="d-block" src={image2} alt="Second slide" />

        <Carousel.Caption className="c-caption">
          <h3>Office/Studios</h3>
          <p>
            Office and studio spaces for rent in downtown Flagstaff, Arizona
            offer a unique opportunity for artists and other creative
            professionals to work and grow their businesses in the heart of the
            city. Located in the vibrant and lively downtown area, these spaces
            are easily accessible and surrounded by a variety of shops,
            restaurants, and entertainment options.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={image5} alt="Third slide" />

        <Carousel.Caption className="c-caption">
          <h3>Airbnb Stays</h3>
          <p>
            Airbnb stays in studio-style and 1 bedroom apartments offer
            travelers a comfortable and convenient home away from home. These
            properties are typically self-contained living spaces that come
            fully furnished with all the necessary amenities, making them a
            great option for travelers who want to enjoy a hassle-free stay.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
