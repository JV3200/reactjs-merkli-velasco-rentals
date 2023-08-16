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
          src="../assets/images/historic-downtown-flagstaff.jpg"
          description="Discover the enchanting world of Joe Sorren's Art Studio in downtown Flagstaff, AZ. Step into a sanctuary of dreamlike paintings, evoking emotions and sparking imagination. Surreal landscapes and expressive figures invite you on an introspective journey. Embrace the captivating allure of Sorren's art—a tribute to the boundless magic of creativity."
        />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards
          title="Shonto Begay Art Studio"
          imageUrl="../assets/images/Red-rocks.jpg"
          description="Shonto Begay's Art Studio in downtown Flagstaff, Arizona, welcomes you to a captivating space where vibrant paintings, intricate illustrations, and rich Navajo storytelling come to life. Explore the artist's mastery of color and form, gaining insight into the essence of Navajo culture through his art and acclaimed books. This warm and inviting studio offers a profound encounter with Shonto Begay's creative brilliance and the timeless beauty of Native American heritage."
          websiteUrl="https://shontobegay.net/"
        />
        <Cards />
      </div>
    </>
  );
}

export default OfficeStudios;
