import React from "react";
import logo from "../assets/images/MVR-Logo.png";
function Home() {
  return (
    <div className="home">
      <a href="/">
        <img src={logo} width="300" height="300" alt="Logo"></img>
      </a>
    </div>
  );
}

export default Home;
