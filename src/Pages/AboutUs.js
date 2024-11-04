import React from "react";
import "./Page.css";
import ChefImage from "../images/chefchillim.png";

const AboutUs = () => (
  <>
    <div className="About-main">
      <div className="img-about">
        <img src={ChefImage} alt="chilli masala" />
      </div>
      <div className="cntnt-about">
        <h1 className="about-us-head">About Us</h1>
        <p className="para-abtus">
          Welcome to a culinary journey through the heart of Italy at Partow
          Foods Restaurant. Immerse yourself in the rich flavors and warm
          hospitality that define our authentic Italian dining experience.
        </p>
        <h1 className="story-us-head">Our Story</h1>
        <p className="para-story">
          Founded with a passion for preserving Italian culinary traditions,
          Partow Foods Restaurant emerged as a labor of love. Our story is woven
          with family recipes, generations of expertise, and a commitment to
          sharing the true essence of Italy.
        </p>
      </div>
    </div>
    <div className="About-main2">
      <div className="cntnt-msn">
        <h1 className="mission-us-head">Our Mission</h1>
        <p className="para-msn">
          At Chilli Masala, our mission is to transport you to the sun-kissed
          landscapes of Italy through every bite. We strive to deliver an
          unparalleled dining experience, where passion meets perfection in
          crafting memorable moments for our guests.
        </p>
      </div>

      <div className="img-msn"></div>
    </div>

    <div className="About-main3">
      <h1 className="clnt-head">What Our Client Say</h1>
      <div className="cntnt-clnt">
        <p className="para-clnt">
          The most amazing curry you're going to find in the Hutt or Wellington.
          I've been here twice now and the food was literally outstanding. Hands
          down the best chicken Tikka Masala I've ever had ( and trust me - I've
          sampled from all around the wellington area & Hutt).
        </p>
      </div>
    </div>
  </>
);

export default AboutUs;
