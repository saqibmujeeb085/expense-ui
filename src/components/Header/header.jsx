import React from "react";
import Logo from "./../../images/Logo.png";
import Avatar from "./../../images/Avatar.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div classNameName="header_top">
        <div classNameName="logo_container">
          <img src={Logo} alt="Logo" />
          <h2>Spendie</h2>
        </div>
        <div classNameName="search_and_icons">
          <div classNameName="search_box">
            <input type="text" classNameName="searchTerm" placeholder="Search..." />
            <button type="submit" classNameName="searchButton">
              <i classNameName="fa fa-search"></i>
            </button>
          </div>
          <div classNameName="icons">
            <div classNameName="message">
              <i classNameName="fa-regular fa-message"></i>
              <span>5</span>
            </div>
            <div classNameName="share">
              <i classNameName="fa-light fa-share"></i>
            </div>
            <div classNameName="user_icon">
              <img src={Avatar} alt="user_image" />
            </div>
            <div classNameName="setting">
              <Link to="/Setting/General">
                <i classNameName="fa-regular fa-gear"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="header_links">
        <ul classNameName="main_links_ul">
          <li>
            <Link to="/Dashboard">
              <i classNameName="fa-regular fa-house"></i> Dashboard
            </Link>
          </li>
          <li classNameName="sub_links_li">
            <Link to="/Group">
              <i classNameName="fa-solid fa-people-group"></i> Groups
            </Link>
          </li>
          <li>
            <Link to="/Friends">
              <i classNameName="fa-regular fa-shapes"></i> Friends
            </Link>
          </li>
          <li>
            <Link to="/Activities">
              <i classNameName="fa-regular fa-flag"></i> Activity
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
