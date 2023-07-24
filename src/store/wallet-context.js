import React from "react";

const WalletContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearWallet: () => {},
});

export default WalletContext;
