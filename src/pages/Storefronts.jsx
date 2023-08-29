import React from "react";
import Cards from "../components/Cards";
import "../App.css";
import shaneimg from "../assets/images/Shane-knight.jpeg";
import barber from "../assets/images/Barber.jpeg";
import cafe from "../assets/images/Cafe.png";
import incahoots from "../assets/images/Incahoots.jpeg";
import rooster from "../assets/images/rooster.jpeg";
import yogaert from "../assets/images/yogart-2.jpeg";
import leroux from "../assets/images/22-leroux.jpeg";

function Storefronts() {
  return (
    <>
      <h1 class="text_shadows">Storefronts</h1>

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
          description="Yogaert, nestled in the heart of downtown Flagstaff, is not your ordinary frozen yogurt store. It's a whimsical oasis where the world of art and frozen treats dance in harmony. As you savor your delicious frozen yogurt, you'll find yourself surrounded by a gallery of captivating paintings, each one a masterpiece waiting to be discovered. Whether you're satisfying your sweet tooth or seeking inspiration, Yogaert is the place where flavor and creativity come together for a delightful experience you won't forget."
        />
        <Cards
          title="Rooster Bus"
          img={rooster}
          description="Rooster Bus, situated in the heart of downtown Flagstaff, is your destination for timeless men's fashion. Step into a world of style where classic meets contemporary. Our curated collection offers high-quality clothing for the modern gentleman. From sharp suits to casual elegance, Rooster Bus ensures you're impeccably dressed for any occasion. Explore a shopping experience that blends tradition with trendsetting, right here in downtown Flagstaff."
          websiteUrl="https://shoptherooster.com/"
        />
        <Cards
          title="Incahoots"
          img={incahoots}
          description="Incahoots, nestled in downtown Flagstaff, is a vintage treasure trove. Explore decades of fashion history, from Victorian elegance to '70s groove. It's not just a store; it's a charming journey into nostalgia, with friendly staff to assist you. Discover unique outfits for themed parties or simply indulge your love for vintage fashion. Come, let your inner fashion explorer roam at Incahoots."
        />
        <Cards
          title="Cafe Stella"
          img={cafe}
          description="Chandi's family has a rich history in the food industry, spanning generations. They recently brought authentic Italian cuisine to Flagstaff with Bondi Bowls. Using fresh ingredients and family recipes, they're committed to providing a top-notch dining experience. They've now expanded their culinary offerings with a new restaurant, Cafe Stella, in downtown Flagstaff, AZ. For inquiries, visit their contact page; your satisfaction is their priority."
        />
        <Cards
          title="Shane Knight Photography"
          img={shaneimg}
          description="Specializing in fine made photography of western horses and the beautiful landscapes that surround them. Offering Beautiful Printed and Framed Fine Art Photography Since 1998"
          websiteUrl="http://shaneknight.com/"
        />
        <Cards
          title="22 Leroux"
          img={leroux}
          description="22 Leroux, in downtown Flagstaff, owned by Annie, is your go-to shop for unique t-shirts and souvenirs. Discover local charm and Flagstaff's essence in every item. Annie's warm welcome makes each visit special."
        />
      </div>
    </>
  );
}

export default Storefronts;
