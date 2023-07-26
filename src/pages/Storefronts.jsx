import React from "react";
import Cards from "../components/Cards";
import "../App.css";

function Storefronts() {
  return (
    <>
      <h1>Storefronts</h1>

      <div className="storefronts">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default Storefronts;
