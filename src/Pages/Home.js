import "./Page.css";
import React from "react";
import Ordernowbtn from "../Components/Ordernowbtn";

function Home() {
  return (
    <>
      <div className="home-page-main">
        <h1>Home</h1>
        <p className="top-para">A Symphony of Spices and Flavours</p>
        <h1 className="top-head">Where every dish tells a story</h1>
        <div className="button-container">
          <Ordernowbtn to="/order" className="order-button">
            ORDER ONLINE
          </Ordernowbtn>
        </div>
        <h2 className="cart-txt">View Our Menu</h2>
        <div className="menu-cart-box">
          <div className="menu-cart">
            <div className="cart-1 cart"></div>
            <div className="cart-2 cart"></div>
            <div className="cart-3 cart"></div>
            <div className="cart-4 cart"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
