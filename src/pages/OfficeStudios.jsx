import React from "react";
import Cards from "../components/Cards";
import "../App.css";
import joe from "../assets/images/JoeSorren-trading-cards.jpeg";
import shonto from "../assets/images/shonto-painting.jpeg";

function OfficeStudios() {
  return (
    <>
      <h1 className="text_shadows">Offices & Studios</h1>

      <div className="officeStudios">
        <Cards
          title="Joe Soren Art Studio"
          img={joe}
          description="Discover the enchanting world of Joe Sorren's Art Studio in downtown Flagstaff, AZ. Step into a sanctuary of dreamlike paintings, evoking emotions and sparking imagination. Surreal landscapes and expressive figures invite you on an introspective journey. Embrace the captivating allure of Sorren's art—a tribute to the boundless magic of creativity."
        />
        <Cards title="" src="" description="" websiteUrl="" />
        <Cards title="" src="" description="" websiteUrl="" />
        <Cards title="" src="" description="" websiteUrl="" />
        <Cards title="" src="" description="" websiteUrl="" />
        <Cards
          title="Shonto Begay Art Studio"
          img={shonto}
          description="Shonto Begay's Art Studio in downtown Flagstaff, Arizona, welcomes you to a captivating space where vibrant paintings, intricate illustrations, and rich Navajo storytelling come to life. Explore the artist's mastery of color and form, gaining insight into the essence of Navajo culture through his art and acclaimed books. This warm and inviting studio offers a profound encounter with Shonto Begay's creative brilliance and the timeless beauty of Native American heritage."
          websiteUrl="https://shontobegay.net/"
        />
        <Cards />
      </div>
    </>
  );
}

export default OfficeStudios;
