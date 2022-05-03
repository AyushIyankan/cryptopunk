import React, { useState, useEffect } from "react";

import instagramLogo from "../assets/img/owner/instagram.png";
import twitterLogo from "../assets/img/owner/twitter.png";
import moreIcon from "../assets/img/owner/more.png";

import "../css/Main.css";

// <div className="collectionCard" onClick={onClick}>
//   <img src={image_url} alt={name} />
//   <div className="details">
//     <div className="name">{name}</div>
//     <div className="id">•#{id}</div>
//     <div className="priceContainer">
//       <img src={weth} className="wethImage" alt="" />
//       <div className="price">{traits[0]?.value}</div>
//     </div>
//   </div>
// </div>;

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  console.log(activePunk.image_url);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>

          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">{activePunk.name}</div>
            <span className="itemNumber">•#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.asset_contract.address}</div>
                <div className="ownerHandle">@ayush</div>
              </div>

              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
