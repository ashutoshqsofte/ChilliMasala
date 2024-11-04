import React from "react";
import { Link } from "react-router-dom";
import "./Btn.css"; // You can create a separate CSS file for button styles

const ContactBtn = ({ to, children, className }) => {
  return (
    <Link to={to} className={`button-cntct ${className}`}>
      {children}
    </Link>
  );
};

export default ContactBtn;
