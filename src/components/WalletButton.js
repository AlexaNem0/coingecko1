import React, { useContext, useEffect, useState } from "react";
import { SlWallet } from "react-icons/sl";
import WalletContext from "../store/wallet-context";
import classes from "./WalletButton.module.css";

const WalletButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const walletCtx = useContext(WalletContext);

  const numberOfWalletItems = walletCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = walletCtx;

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div className="btn-group">
      <button className={btnClasses} onClick={props.onClick}>
        <SlWallet className="btn-wallet" />
        <span>Wallet</span>
        <span className={classes.badge}>{numberOfWalletItems}</span>
      </button>
    </div>
  );
};

export default WalletButton;
