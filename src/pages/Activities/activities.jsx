import React from 'react';
import './activities.css';
import Span from './../../images/span.png';

const Activities = () => {
  return ( 
    <div className="Container_width_main">
      <div className="flex_spaceBetween line_bottom_full">
        <h2>Activities</h2>
          <div className="search_box search_inPages">
            <input type="text" className="searchTerm" placeholder="Search..." />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
      </div>
      <div className="box">
        <div className="flex_spaceBetween">
        <div className="img_with_text">
                  <img src={Span} alt="Group pic"/>
                  <div className="Group_name">
                    <h3>Trip</h3>
                    <h4><span>Created by: Hasham</span>(hasham.321@gmail.com)</h4>
                  </div>
                </div>
                <div className="activity_date">
                <p>11, Mar 2022</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Activities;