import React from "react";
import "../style/Navbar.css";
import navbarItems from "../NavbarItems.js";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <nav>
      <Link to="/" className="link">
        Blood Warriors
      </Link>
      <div className="menu-items">
        {navbarItems.map((item, index) => (
          <Link className="link" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
        <div className="mobile-menu-icon">
          <FaBars onClick={toggle} />
        </div>
    </nav>
  );
};

export default Navbar;