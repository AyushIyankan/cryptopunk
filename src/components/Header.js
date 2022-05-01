import React from "react";

import "../css/Header.css";

import punkLogo from "../assets/img/header/cryptopunk-logo.png";
import searchIcon from "../assets/img/header/search.png";
import themeSwitchIcon from "../assets/img/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="logo" className="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search-icon" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user"
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
}

export default Header;
