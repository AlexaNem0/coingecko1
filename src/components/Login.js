import React from "react";
import { FaAppStore } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";
import "./Login.css";
import Trade from "../assets/trade-1.webp";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <img src={Trade} alt="trade app" />
        </div>
        <div className="right">
          <h2>
            All of you want to make money? Earn passive income with crypto
            investments.
          </h2>
          <p>
            Get up to a 15% discount on an annual subscription if you download
            and sign up with our mobile app.
          </p>
          <div className="input-container-app">
            <a
              href="https://www.apple.com/ca/app-store/"
              type="submit"
              target="blank"
              className="btn btn-app "
            >
              <FaAppStore className="icon" />
              Get it on App Store
            </a>
            <a
              href="https://play.google.com/store/apps"
              type="submit"
              target="blank"
              className="btn btn-app "
            >
              <RiGooglePlayLine className="icon" />
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
