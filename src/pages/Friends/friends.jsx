import React from "react";
import "./friends.css";
import Span from './../../images/span.png';

const Friends = () => {
  return (
    <div className="Container_width_main">
      <div className="flex_spaceBetween line_bottom_full">
        <h2>FRIENDS</h2>
        <div className="button_and_earch">
          <button  className="butt" onClick={{}}>Add Friends</button>
          <div className="search_box">
            <input type="text" className="searchTerm" placeholder="Search..." />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="flex_spaceBetween">
        <div className="img_with_text">
                  <img src={Span} alt="Group pic"/>
                  <div className="Group_name">
                    <h3>Hasham</h3>
                    <h4>hasham.321@gmail.com</h4>
                  </div>
                </div>
                <div className="Icon_delete">
                <i className="fa-solid fa-trash"></i>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
