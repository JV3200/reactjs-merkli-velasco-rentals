import React from "react";
import Cards from "../components/Cards";
import "../App.css";
import shaneimg from "../assets/images/Shane-knight.jpeg";
import barber from "../assets/images/Barber.jpeg";
import cafe from "../assets/images/Cafe.png";
import incahoots from "../assets/images/Incahoots.jpeg";
import rooster from "../assets/images/rooster_bus.jpeg";
import yogaert from "../assets/images/yogart-2.jpeg";

function Storefronts() {
  return (
    <>
      <h1>Storefronts</h1>

      <div className="storefronts">
        <Cards
          title="Barber"
          img={barber}
          description="Welcome to Dluxe Barber Shop, a premier grooming destination in downtown Flagstaff. Step inside our stylish and modern space, where expert barbers provide top-notch haircuts, shaves, and grooming services. Enjoy a relaxed and welcoming atmosphere while experiencing the artistry of our skilled team. Discover a new level of sophistication and confidence at Dluxe Barber Shop, where every visit promises a dapper transformation."
          websiteUrl="https://downtownflagstaff.org/go/dluxe-barber-shop"
        />
        <Cards
          title="Yogaert"
          img={yogaert}
          websiteUrl="https://www.instagram.com/yogaert/"
        />
        <Cards
          title="Rooster Bus"
          img={rooster}
          websiteUrl="https://shoptherooster.com/"
        />
        <Cards title="Incahoots" img={incahoots} />
        <Cards title="Cafe Stella" img={cafe} />
        <Cards
          title="Shane Knight Photography"
          img={shaneimg}
          description="Specializing in fine made photography of western horses and the beautiful landscapes that surround them. Offering Beautiful Printed and Framed Fine Art Photography Since 1998"
          websiteUrl="http://shaneknight.com/"
        />
        <Cards />
      </div>
    </>
  );
}

export default Storefronts;
