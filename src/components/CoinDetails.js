import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./CardCrypto";
import WalletContext from "../store/wallet-context";
import "./CoinDetails.css";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const LIMIT = 9;

const CoinDetails = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const walletCtx = useContext(WalletContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToWallet = (id) => {
    const selectedCoin = data.find((coin) => coin.id === id);

    if (!selectedCoin) return;

    const existingItem = (item) => walletCtx.addItem({ ...item, amount: 1 });

    const newItem = {
      id: selectedCoin.id,
      image: selectedCoin.image,
      name: selectedCoin.name,
      amount: existingItem?.amount ? existingItem.amount + 1 : 1,
      price: selectedCoin.current_price,
    };

    walletCtx.addItem(newItem);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2 className="explore">
            Explore top Crypto Coins Like BitCoin, Ethereum and DogeCoin
          </h2>
          <p>
            See all available Crypto Coins assets in real time and trade like a
            PRO:
          </p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Find your coin"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button type="submit" className="btn">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          {filteredData.slice(0, LIMIT).map((coin) => (
            <Card
              key={coin.id}
              id={coin.id}
              image={coin.image}
              name={coin.name}
              currentPrice={coin.current_price}
              priceChangePercentage24h={coin.price_change_percentage_24h}
              addToWallet={addToWallet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
