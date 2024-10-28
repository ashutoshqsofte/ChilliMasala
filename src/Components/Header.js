import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPhone, FaHeart } from "react-icons/fa";
import "./Header.css";
import logo from "../logo/chilliLoGo.png";

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Chilli Masala Logo" className="logo-image" />
      </Link>
    </div>
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About Us</Link>
      <Link to="/reservation">Reservation</Link>
      <Link to="/order">Order</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
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

export default Header;
