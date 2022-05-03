import React from "react";
import CollectionCard from "./CollectionCard";
import "../css/PunkList.css";
import HorizontalScroll from "react-horizontal-scrolling";

const PunkList = ({ punkListData, selectedPunk }) => {
  const handleClick = (e) => {
    console.log(e.id);
  };
  return (
    <HorizontalScroll>
      <div className="punkList">
        {punkListData.map((punk) => {
          return (
            <div key={punk.id} onClick={() => selectedPunk(punk.token_id)}>
              <CollectionCard key={punk.token_id} {...punk} />
            </div>
          );
        })}
      </div>
      {/* <div className="punkList">
        {punkListData.map((punk) => {
          return (
            // <div onClick={() => console.log(punk.id)}>
            <CollectionCard onClick={(e) => e.id} key={punk.id} {...punk} />
            // </div>
          );
        })}
      </div> */}
    </HorizontalScroll>
  );
};

export default PunkList;
