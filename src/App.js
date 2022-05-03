import "./css/App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(1);

  const API_URL = `https://testnets-api.opensea.io/assets?asset_contract_address=0xb80409A31B53d3EF54dD9900eA84980cA2BE5eB5&order_direction=asc`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPunkListData(data.assets));
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
        </>
      )}

      <PunkList punkListData={punkListData} selectedPunk={selectedPunk} />
    </div>
  );
}

export default App;
