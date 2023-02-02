import React from "react";
import { useNavigate } from "react-router-dom";

function AirbnbStays() {
  const history = useNavigate();

  function handleClick() {
    history.push("https://www.airbnb.com/users/29116663/listings");
  }

  return (
    <div>
      <button onClick={handleClick}>Go to Example.com</button>
    </div>
  );
}
export default AirbnbStays;
