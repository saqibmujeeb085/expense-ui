import React, {useState} from "react";
import "./friends.css";
import Span from './../../images/span.png';
import NewFriend from "../../components/Modals/NewFriend/newFriend";

const Friends = () => {
  const [openNewFriend, setOpenNewFriend] = useState(false);
  return (
    <>
    {openNewFriend && 
    <NewFriend changeState={setOpenNewFriend}/>
    }
    <div classNameName="Container_width_main">
      <div classNameName="flex_spaceBetween line_bottom_full">
        <h2>FRIENDS</h2>
        <div classNameName="button_and_earch">
          <button  classNameName="butt" onClick={() => setOpenNewFriend(true)}>Add Friends</button>
          <div classNameName="search_box">
            <input type="text" classNameName="searchTerm" placeholder="Search..." />
            <button type="submit" classNameName="searchButton">
              <i classNameName="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div classNameName="box">
        <div classNameName="flex_spaceBetween">
        <div classNameName="img_with_text">
                  <img src={Span} alt="Group pic"/>
                  <div classNameName="Group_name">
                    <h3>Hasham</h3>
                    <h4>hasham.321@gmail.com</h4>
                  </div>
                </div>
                <div classNameName="Icon_delete">
                <i classNameName="fa-solid fa-trash"></i>
                </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Friends;
