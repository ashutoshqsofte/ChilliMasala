import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-title">
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="contact-description">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
        </p>
        <form className="form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="tel" placeholder="Phone number" className="input-field" />
          <select className="input-field">
            <option value="" disabled selected>
              How did you find us?
            </option>
            <option value="search">Search Engine</option>
            <option value="social">Social Media</option>
            <option value="friend">Friend or Family</option>
            <option value="advertisement">Advertisement</option>
          </select>
          <button type="submit" className="submit-button">SEND</button>
        </form>
      </div>
      <div className="contact-details">
        <div className="contact-info">
          <p className="contact-phone">
            <i className="fas fa-phone"></i> +6011 5381 0610
          </p>
          <p className="contact-email">
            <i className="fas fa-envelope"></i> info@partowads.com
          </p>
        </div>
        <div className="map">
          <img
            src="path/to/your/map-image.png"
            alt="Map Location"
            className="map-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
