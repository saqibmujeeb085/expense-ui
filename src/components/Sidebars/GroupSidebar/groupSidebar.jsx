import React from 'react';
import { Link } from 'react-router-dom';
import './groupSidebar.css';


const GroupSidebar = () => {
  return (
    <div classNameName="sidebar_group_page">
       <ul classNameName="group_links_ul">
          <li>
           <Link to="/Group/Transactions"><i classNameName="fa-regular fa-house"></i> Transactions</Link>
          </li>
          <li>
           <Link to="/Group/Debts"><i classNameName="fa-solid fa-people-group"></i> Debts</Link>
          </li>
          <li>
           <Link to="/Group/Members"><i classNameName="fa-regular fa-shapes"></i> Members</Link>
          </li>
          <li>
           <Link to="/Group/Permissions"><i classNameName="fa-regular fa-flag"></i> Permissions</Link>
          </li>
          <li>
           <Link to="/Group/RecentActivity"><i classNameName="fa-solid fa-dollar-sign"></i>Recent Activity</Link>
          </li>
        </ul>
    </div>
  )
}

export default GroupSidebar;