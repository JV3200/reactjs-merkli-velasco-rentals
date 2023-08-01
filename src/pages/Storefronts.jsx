import React from "react";
import Cards from "../components/Cards";
import "../App.css";

function Storefronts() {
  return (
    <>
      <h1>Storefronts</h1>

      <div className="storefronts">
        <Cards
          title="Barber"
          imageUrl="../assets/images/historic-downtown-flagstaff.jpg"
          description="Welcome to Dluxe Barber Shop, a premier grooming destination in downtown Flagstaff. Step inside our stylish and modern space, where expert barbers provide top-notch haircuts, shaves, and grooming services. Enjoy a relaxed and welcoming atmosphere while experiencing the artistry of our skilled team. Discover a new level of sophistication and confidence at Dluxe Barber Shop, where every visit promises a dapper transformation."
        />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards
          title="Shane Knight Photography"
          imageUrl="../assets/images/Red-rocks.jpg"
          description="Specializing in fine made photography of western horses and the beautiful landscapes that surround them. Offering Beautiful Printed and Framed Fine Art Photography Since 1998"
        />
        <Cards />
      </div>
    </>
  );
}

export default Storefronts;
