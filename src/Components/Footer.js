import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="address">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque eum omnis illo perspiciatis magnam sequi in nulla necessitatibus velit laudantium accusamus quidem, nihil dolorum officia at ullam sapiente cupiditate.</p>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-buttons">
          <Link to="/order" className="order-button">
            Order Now
          </Link>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
