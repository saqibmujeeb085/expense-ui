import React, { useState } from 'react';
import Logo from './../../images/Logo.png';
import Avatar from './../../images/Avatar.png';  
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [openSubLinks, setOpenSubLinks] = useState(false);
  
  const OpenLinks = () => {
   setOpenSubLinks(!openSubLinks)
  } 

  return (
    <>
    <div className="header_top">
      <div className="logo_container">
        <img src={Logo} alt='Logo' />
        <h2>LOGO</h2>
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
          <Link to="/Setting/General" onClick={() => setOpenSubLinks(false)}>
          <i className="fa-regular fa-gear"></i>
          </Link>
        </div>
        </div>
      </div>
    </div>
    <div className="header_links">
     <ul className="main_links_ul">
      <li>
        <Link onClick={() => setOpenSubLinks(false)} to="/Dashboard">
        <i className="fa-regular fa-house"></i> Dashboard
        </Link>
      </li>
      <li className="sub_links_li">
       <div> 
       <Link onClick={() => setOpenSubLinks(false)} to="/Group">
      <i className="fa-solid fa-people-group"></i> Groups 
      </Link>
      {" "}<i onClick={OpenLinks} className="fa-sharp fa-regular fa-caret-down"></i>
       </div>
      {openSubLinks &&
        <ul className="sub_links_ul">
          <li>
           <Link onClick={() => setOpenSubLinks(false)} to="/Group/Transactions"><i className="fa-regular fa-house"></i> Transactions</Link>
          </li>
          <li>
           <Link onClick={() => setOpenSubLinks(false)} to="/Group/Debts"><i className="fa-solid fa-people-group"></i> Debts</Link>
          </li>
          <li>
           <Link onClick={() => setOpenSubLinks(false)} to="/Group/Members"><i className="fa-regular fa-shapes"></i> Members</Link>
          </li>
          <li>
           <Link onClick={() => setOpenSubLinks(false)} to="/Group/Permissions"><i className="fa-regular fa-flag"></i> Permissions</Link>
          </li>
          <li>
           <Link onClick={() => setOpenSubLinks(false)} to="/Group/RecentActivity"><i className="fa-solid fa-dollar-sign"></i>Recent Activity</Link>
          </li>
        </ul>
      }
      </li>
      <li>
        <Link onClick={() => setOpenSubLinks(false)} to="/Friends">
        <i className="fa-regular fa-shapes"></i> Friends
        </Link>
      </li>
      <li>
        <Link onClick={() => setOpenSubLinks(false)} to="/Activities">
        <i className="fa-regular fa-flag"></i> Activity
        </Link>
      </li>
     </ul>
    </div>
    </>
  )
}

export default Header