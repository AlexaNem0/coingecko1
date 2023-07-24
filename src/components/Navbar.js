import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Wealthlogo from "../assets/wealthsimple.svg";
import Ndax from "../assets/new-ndax-logo-1.svg";
import Crypto from "../assets/crypto.png";
import Coin from "../assets/coin.svg";
import WalletButton from "./WalletButton";

const Navbar = (props) => {
  const [clickHamburger, setClickHamburger] = useState(false);

  const handleClick = () => setClickHamburger(!clickHamburger);

  return (
    <div className="header">
      <div className="container">
        <div className="bi-heading">
          <h1 className="bi-rotation">₿I</h1>
          <p className="primary no-rotation">Coin</p>
        </div>

        <ul className={clickHamburger ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="https://www.wealthsimple.com/en-ca" target="blank">
              <img src={Wealthlogo} alt="logo" />
            </a>
          </li>
          <li>
            <a href="https://ndax.io/" target="blank">
              <img className="ndax" src={Ndax} alt="logo" />
            </a>
          </li>
          <li>
            <a href="https://crypto.com/" target="blank">
              <img className="crypto" src={Crypto} alt="logo" />
            </a>
          </li>
          <li>
            <a href="https://www.coinbase.com/" target="blank">
              <img className="coin" src={Coin} alt="logo" />
            </a>
          </li>
        </ul>
        <WalletButton onClick={props.onShowCart} />
        <div className="hamburger" onClick={handleClick}>
          {clickHamburger ? (
            <FaTimes size={20} style={{ color: "#adb5bd" }} />
          ) : (
            <FaBars size={20} style={{ color: "#adb5bd" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
