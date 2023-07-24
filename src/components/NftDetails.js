import axios from "axios";
import React, { useState, useEffect } from "react";
import "./NftDetails.css";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.reservoir.tools/collections/v6?name=women",
      {
        params: {
          includeTopBid: false,
          normalizeRoyalties: false,
          useNonFlaggedFloorAsk: false,
          sortBy: "allTimeVolume",
          limit: 20,
        },
        headers: { accept: "*/*", "x-api-key": "demo-api-key" },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Card = ({ collection }) => (
  <div className="card">
    <div className="top">
      <img src={collection.image} alt="/" />
    </div>
    <div>
      <h5>{collection.name}</h5>
      <p>{collection.floorAsk.price.currency.name}</p>
      <p>${collection.floorAsk.price.amount.usd.toFixed(2)}</p>
    </div>
    <button
      onClick={() => window.open(collection.image, "_blank")}
      className="btn"
    >
      Show
    </button>
  </div>
);

const NftDetails = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  if (!data) return null;

  const filteredCollections = data.collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2 className="explore">
            With our powerful wallet, minting and market APIs, you have a
            trustworthy partner to get profit.
          </h2>
          <p>See all available NFT assets: </p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Find your NFT"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          {filteredCollections.slice(0, 9).map((collection) => (
            <Card key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
