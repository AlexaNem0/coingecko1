import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Card = ({
  id,
  image,
  name,
  currentPrice,
  priceChangePercentage24h,
  addToWallet,
}) => {
  return (
    <div className="card" key={id}>
      <div className="top">
        <img src={image} alt="/" />
      </div>
      <div>
        <h5>{name}</h5>
        <p>${currentPrice.toFixed(2)}</p>
      </div>
      {priceChangePercentage24h < 0 ? (
        <span className="red">
          <FiArrowDown className="icon" />
          {priceChangePercentage24h.toFixed(2)}%
        </span>
      ) : (
        <span className="green">
          <FiArrowUpRight className="icon" />
          {priceChangePercentage24h.toFixed(2)}%
        </span>
      )}
      <button className="btn" onClick={() => addToWallet(id)}>
        Add
      </button>
    </div>
  );
};

export default Card;
