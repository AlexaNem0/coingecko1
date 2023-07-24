import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NftDetails from "./components/NftDetails";
import WalletProvider from "./store/WalletProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  console.log(showCartHandler);
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <WalletProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Navbar onShowCart={showCartHandler} />
        <Hero />
        <CoinDetails />
        <NftDetails />
        <Login />
        <Footer />
      </WalletProvider>
    </>
  );
}

export default App;
