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
          description="Shop at Barbershop by Historic Downtown Flagstaff for the best"
        />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards
          title="Shane Knight Photography"
          imageUrl="../assets/images/Red-rocks.jpg"
          description="Visit Shane Knight's photography studio in downtown Flagstaff to get"
        />
        <Cards />
      </div>
    </>
  );
}

export default Storefronts;
