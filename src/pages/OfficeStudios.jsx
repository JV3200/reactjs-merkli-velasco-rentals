import React from "react";
import Cards from "../components/Cards";
import "../App.css";

function OfficeStudios() {
  return (
    <>
      <h1>Storefronts</h1>

      <div className="storefronts">
        <Cards
          title="Joe Soren"
          imageUrl="../assets/images/historic-downtown-flagstaff.jpg"
          description="Artist with mural work around flagstaff also internationally "
        />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards
          title="Shonto Begay Art Studio"
          imageUrl="../assets/images/Red-rocks.jpg"
          description="Visit Shane Knight's photography studio in downtown Flagstaff to get"
        />
        <Cards />
      </div>
    </>
  );
}

export default OfficeStudios;
