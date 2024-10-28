import React from "react";
import { Link } from "react-router-dom";
import "./Btn.css"; // You can create a separate CSS file for button styles

const Ordernowbtn = ({ to, children, className }) => {
  return (
    <Link to={to} className={`button ${className}`}>
      {children}
    </Link>
  );
};

export default Ordernowbtn;
