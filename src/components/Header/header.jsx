import React from "react";
import Logo from "./../../images/Logo.png";
import Avatar from "./../../images/Avatar.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header_top">
        <div className="logo_container">
          <img src={Logo} alt="Logo" />
          <h2>Spendie</h2>
        </div>
        <div className="search_and_icons">
          <div className="search_box">
            <input type="text" className="searchTerm" placeholder="Search..." />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="icons">
            <div className="message">
              <i className="fa-regular fa-message"></i>
              <span>5</span>
            </div>
            <div className="share">
              <i className="fa-light fa-share"></i>
            </div>
            <div className="user_icon">
              <img src={Avatar} alt="user_image" />
            </div>
            <div className="setting">
              <Link to="/Setting/General">
                <i className="fa-regular fa-gear"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header_links">
        <ul className="main_links_ul">
          <li>
            <Link to="/Dashboard">
              <i className="fa-regular fa-house"></i> Dashboard
            </Link>
          </li>
          <li className="sub_links_li">
            <Link to="/Group">
              <i className="fa-solid fa-people-group"></i> Groups
            </Link>
          </li>
          <li>
            <Link to="/Friends">
              <i className="fa-regular fa-shapes"></i> Friends
            </Link>
          </li>
          <li>
            <Link to="/Activities">
              <i className="fa-regular fa-flag"></i> Activity
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
