import React from 'react';
import './settingSidebar.css';
import { Link } from 'react-router-dom';


const SettingSidebar = () => {
  return (
    <div classNameName="sidebar_setting_page">
       <ul classNameName="setting_links_ul">
          <li>
           <Link to="/Setting/General"><i classNameName="fa-regular fa-gear"></i> General</Link>
          </li>
          <li>
           <Link to="/Setting/ResetPassword"><i classNameName="fa-regular fa-gear"></i> Reset Password</Link>
          </li>
        </ul>
    </div>
  )
}

export default SettingSidebar;