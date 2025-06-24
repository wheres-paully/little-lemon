import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./assets/LLHorizontal.png";

function Nav() {
  const [showNav, setShowNav] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`vertical-nav ${showNav ? "visible" : "hidden"}`}>
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservationstepone">Reservation</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
