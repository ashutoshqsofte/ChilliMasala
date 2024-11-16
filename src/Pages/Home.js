import "./Page.css";
import React from "react";
import Ordernowbtn from "../Components/Ordernowbtn";
import ContactBtn from "../Components/ContactBtn";
import "./Responsive.css";
import myImage from '../images/Chef-PicHome.png';

function Home() {
  return (
    <>
      <div className="home-page-main">
        <p className="top-para">A Symphony of Spices and Flavours</p>
        <h1 className="top-head">Where every dish tells a story</h1>
        <div className="button-container">
          <Ordernowbtn to="/order" className="order-button">
            ORDER ONLINE
          </Ordernowbtn>
        </div>
        <div className="cntct-btn-h">
          <ContactBtn to="/order" className="cntct-button">
            CONTACT US
          </ContactBtn>
        </div>
        <h2 className="cart-txt">View Our Menu</h2>
        <div className="menu-cart-box">
          <div className="menu-cart">
            <div className="cart-1 cart">
              <center>
                <h2 className="h1-menu">Appetizers</h2>
              </center>
              <div className="img_1"></div>
              <a href="/menu">
                <a href="/menu">
                  <button className="btn-menu-hm">View more</button>
                </a>
              </a>
            </div>
            <div className="cart-2 cart">
              <center>
                <h2 className="h1-menu">Main Courses</h2>
              </center>
              <div className="img_2"></div>
              <a href="/menu">
                <button className="btn-menu-hm">View more</button>
              </a>
            </div>
            <div className="cart-3 cart">
              <center>
                <h2 className="h1-menu">Drinks</h2>
              </center>
              <div className="img_3"></div>
              <a href="/menu">
                <button className="btn-menu-hm">View more</button>
              </a>
            </div>
            <div className="cart-4 cart">
              <center>
                <h2 className="h1-menu">Dissert</h2>
              </center>
              <div className="img_4"></div>
              <a href="/menu">
                <button className="btn-menu-hm">View more</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-main2">
        <div className="head-2nd">
          <h1 className="h1-2nd">
            Chef-Recommendation
            <img className="imgHome" src={myImage} alt="Local Images" />
            <h2 className="h2-2nd">
              Butter Chicken
              <p className="p-2nd">
                Savor the rich and creamy indulgence of our signature Butter
                Chicken. Tender, marinated chicken is simmered in a luscious
                tomato sauce, spiced to perfection, and finished with a touch of
                butter. The balance of savory, tangy, and mildly spiced flavors
                creates an unforgettable dish. Served with warm naan or fragrant
                basmati rice, our Butter Chicken is a delicious journey into the
                heart of Indian cuisine, perfect for both first-time tasters and
                seasoned food lovers.
              </p>
            </h2>
          </h1>

          <div className="Dv-2nd"></div>
        </div>

        <div className="vdo-main">
          <div className="vdo-2nd">
            <video width="100%" height="100%" loop muted autoPlay>
              <source src={require("../images/vdo-01.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="button-container btn-resrv">
              <Ordernowbtn to="/event" className="order-button">
                RESERVE NOW
              </Ordernowbtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
