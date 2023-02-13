import React from 'react';
import './dashboard.css';
import Spec from './../../images/spec.png';
import Span from './../../images/span.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return ( 
    <div className="Container_width_main">
      <h2>DASHBOARD</h2>
      <div  className="data_container line">
        <div className="dta_box">
          <h3>
            Total Groups
          </h3>
          <div className="flex_spaceBetween">
            <h4>04</h4>
            <i className="fa-solid fa-people-group"></i>
          </div>
        </div>
        <div className="dta_box">
        <h3>
            Total Friends
          </h3>
          <div className="flex_spaceBetween">
            <h4>23</h4>
            <i className="fa-solid fa-user-group"></i>
          </div>
        </div>
        <div className="dta_box">
        <h3>
            Total Transactioins
          </h3>
          <div className="flex_spaceBetween">
            <h4>300</h4>
            <i className="fa-regular fa-chart-line"></i>
          </div>
        </div>
        <div className="dta_box">
        <h3>
            Total Spending
          </h3>
            <h4>$34K</h4>
        </div>
      </div>
      <div className="group_and_friends_container">
      <div className="groups_container line">
        <h2>GROUPS</h2>
        <table>
            <tr>
              <th>Group Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <div className="img_with_text">
                  <img src={Spec} alt="Group pic"/>
                  <div className="Group_name">
                    <h3>SPECTS YELLOW</h3>
                    <h4>4 members</h4>
                  </div>
                </div>
              </td>
              <td>
                <h5>Home</h5>
              </td>
              <td>
              <h3 onClick={{}}>View</h3>
              </td>
            </tr>
        </table>
      </div>
      <div className="friends_container line">
        <div className="flex_spaceBetween">
          <h2>Friends</h2>
          <Link to="/Friends">
            VIEW ALL
          </Link>
        </div>
        <div className="img_with_text">
                  <img src={Span} alt="Group pic"/>
                  <div className="Group_name">
                    <h3>Hasham</h3>
                    <h4>hasham.321@gmail.com</h4>
                  </div>
                </div>
      </div>
      </div>
    </div>
    )
}

export default Dashboard;