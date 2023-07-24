import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <p> Buy & Sell Crypto 24/7 using your savings account</p>
          <h1 className="invest">Invest in Cryptocurrency with your TFSA</h1>
          <p>Buy, Sell, and store hundreds of Coins in one place</p>
          <div className="input-container">
            <form
              className="form_style"
              name="contact"
              action="/contact"
              method="post"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                required
                type="text"
                name="name"
                placeholder="Your name"
              ></input>
              <input name="email" type="text" placeholder="Enter your email" />
              <button type="submit" className="btn">
                Learn More
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="Crypto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
