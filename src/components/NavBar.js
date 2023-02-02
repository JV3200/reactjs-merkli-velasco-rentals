import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {
  // State to track whether the sidebar is open or closed
  const [sidebar, setSidebar] = useState(false);

  // Function to toggle the sidebar open/closed state
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Provide an icon context for the navigation bar */}
      <IconContext.Provider value={{ color: "undefined" }}>
        {/* Navbar container */}
        <div className="navbar">
          {/* Link to show the sidebar */}
          <Link to="#" className="menu-bars">
            {/* FaBars icon with onClick function to toggle the sidebar */}
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        {/* Sidebar navigation menu */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {/* List of navigation menu items */}
          <ul className="nav-menu-items" onClick={showSidebar}>
            {/* Link to close the sidebar */}
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* Map through the navigation menu data to create menu items */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {/* Item icon */}
                    {item.icons}
                    {/* Item title */}
                    <span>{item.title}</span>
                  </Link>
                  {/* <Link to="https://www.airbnb.com/users/29116663/listings">Air</Link> */}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
