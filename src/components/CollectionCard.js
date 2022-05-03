import React from "react";

import weth from "../assets/img/weth.png";

import "../css/CollectionCard.css";

function CollectionCard({ id, name, traits, image_url }) {
  return (
    <div className="collectionCard">
      <img src={image_url} alt={name} />
      <div className="details">
        <div className="name">{name}</div>
        <div className="id">•#{id}</div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
