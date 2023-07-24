import { useReducer } from "react";
import WalletContext from "./wallet-context";

const defaultWalletState = {
  items: [],
  totalAmount: 0,
};

const walletReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingWalletItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingWalletItem = state.items[existingWalletItemIndex];
    let updatedItems;

    if (existingWalletItem) {
      const updatedItem = {
        ...existingWalletItem,
        amount: existingWalletItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingWalletItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingWalletItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingWalletItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingWalletItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultWalletState;
  }
  return defaultWalletState;
};

const WalletProvider = (props) => {
  const [walletState, dispatchWalletAction] = useReducer(
    walletReducer,
    defaultWalletState
  );

  const addItemToWalletHandler = (item) => {
    dispatchWalletAction({ type: "ADD", item: item });
  };

  const removeItemFromWalletHandler = (id) => {
    dispatchWalletAction({ type: "REMOVE", id: id });
  };

  const clearWalletHandler = () => {
    dispatchWalletAction({ type: "CLEAR" });
  };
  const walletContext = {
    items: walletState.items,
    totalAmount: walletState.totalAmount,
    addItem: addItemToWalletHandler,
    removeItem: removeItemFromWalletHandler,
    clearWallet: clearWalletHandler,
  };

  return (
    <WalletContext.Provider value={walletContext}>
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
