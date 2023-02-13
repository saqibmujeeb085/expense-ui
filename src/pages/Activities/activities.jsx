import React from 'react';
import './activities.css';
import Span from './../../images/span.png';

const Activities = () => {
  return ( 
    <div classNameName="Container_width_main">
      <div classNameName="flex_spaceBetween line_bottom_full">
        <h2>Activities</h2>
          <div classNameName="search_box search_inPages">
            <input type="text" classNameName="searchTerm" placeholder="Search..." />
            <button type="submit" classNameName="searchButton">
              <i classNameName="fa fa-search"></i>
            </button>
          </div>
      </div>
      <div classNameName="box">
        <div classNameName="flex_spaceBetween">
        <div classNameName="img_with_text">
                  <img src={Span} alt="Group pic"/>
                  <div classNameName="Group_name">
                    <h3>Trip</h3>
                    <h4><span>Created by: Hasham</span>(hasham.321@gmail.com)</h4>
                  </div>
                </div>
                <div classNameName="activity_date">
                <p>11, Mar 2022</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Activities;