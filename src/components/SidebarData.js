import React from "react";
// import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi2";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Storefronts",
    path: "/storefronts",
    icons: <HiIcons.HiBuildingStorefront />,
    cName: "nav-text",
  },
  {
    title: "Office/Studios",
    path: "/officeStudios",
    icons: <GiIcons.GiOfficeChair />,
    cName: "nav-text",
  },
  {
    title: "Airbnb Stay",
    path: "https://www.airbnb.com/users/29116663/listings",
    icons: <FaIcons.FaAirbnb />,
    cName: "nav-text",
  },
  {
    title: "Login/Register",
    path: "/loginRegister",
    icons: <GiIcons.GiArchiveRegister />,
    cName: "nav-text",
  },
];
