import "./css/App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(async () => {
    const openseaData = await axios.get(
      "https://testnets-api.opensea.io/assets?asset_contract_address=0x2ee405DDAb9Be3DC3ce2457E224F0362396A4239&order_direction=asc"
    );

    console.log(openseaData.data.assets);
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"BandanaPunk"}
        traits={[
          {
            value: 8,
          },
        ]}
        image={
          "https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg"
        }
      />
    </div>
  );
}

export default App;
