import React from "react";
// import logo from "../assets/images/MVR-Logo.png";
import ImageCarousel from "../components/ImageCarousel";
import image1 from "../assets/images/historic-downtown-flagstaff.jpg";
import image2 from "../assets/images/0422_Shonto_OPEN.jpeg";
import image3 from "../assets/images/storefront.jpeg";
import image4 from "../assets/images/kalen-kemp-bvsVcxjJJ6M-unsplash.jpg";

function Home() {
  const images = [image1, image2, image3, image4];

  return (
    <div className="App">
      <ImageCarousel images={images} interval={4000} />
    </div>
  );
}

export default Home;
