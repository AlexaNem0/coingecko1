import React, { useContext } from "react";
import WalletContext from "../store/wallet-context";

const Wallet = (props) => {
  const walletCtx = useContext(WalletContext);

  return (
    <div className="wallet-container right featured">
      <h2>Wallet</h2>
      {walletCtx.items.map((item, id) => (
        <div className="wallet-item" key={id}>
          <div className="wallet-item-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="wallet-item-details">
            <h5>{item.name}</h5>
            <p>
              Quantity: {item.amount} / Total Value: ${item.price.toFixed(2)}
            </p>
          </div>
          <div className="wallet-item-price">$ {item.price.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default Wallet;
