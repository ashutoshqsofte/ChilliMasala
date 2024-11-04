import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPhone, FaHeart, FaBars } from "react-icons/fa";
import "./Header.css";
import logo from "../logo/chilliLoGo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Burger icon for mobile */}
      <button className="burger-icon" onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Centered Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Chilli Masala Logo" className="logo-image" />
        </Link>
      </div>

      {/* Menu links */}
      <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/menu" onClick={toggleMenu}>
          Menu
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/reservation" onClick={toggleMenu}>
          Reservation
        </Link>
        <Link to="/order" onClick={toggleMenu}>
          Order
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>

      {/* Icons */}
      <div className="icons">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <Link to="/contact">
          <FaPhone />
        </Link>
        <Link to="/favorites">
          <FaHeart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
