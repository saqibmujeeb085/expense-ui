import React from 'react';
import { Link } from 'react-router-dom';
import './groupSidebar.css';


const GroupSidebar = () => {
  return (
    <div className="sidebar_group_page">
       <ul className="group_links_ul">
          <li>
           <Link to="/Group/Transactions"><i className="fa-regular fa-house"></i> Transactions</Link>
          </li>
          <li>
           <Link to="/Group/Debts"><i className="fa-solid fa-people-group"></i> Debts</Link>
          </li>
          <li>
           <Link to="/Group/Members"><i className="fa-regular fa-shapes"></i> Members</Link>
          </li>
          <li>
           <Link to="/Group/Permissions"><i className="fa-regular fa-flag"></i> Permissions</Link>
          </li>
          <li>
           <Link to="/Group/RecentActivity"><i className="fa-solid fa-dollar-sign"></i>Recent Activity</Link>
          </li>
        </ul>
    </div>
  )
}

export default GroupSidebar;