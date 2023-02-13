import React, {useState} from 'react';
import Pagination from '../../../components/Pagination/pagination';
import GroupSidebar from '../../../components/Sidebars/GroupSidebar/groupSidebar';
import Per from './../../../images/per.png';
import './recentActivity.css';
import NewTransaction from '../../../components/Modals/NewTransactionActivity/newTransaction';



const RecentActivity = () => {
  const [openRecent, setOpenRecent] = useState(false);
  return ( 
    <>
    {openRecent &&
    <NewTransaction changeState={setOpenRecent}/>
    }
    <div className="Container_width_main double_column">
    <div className="with_sidebar">
      <div className="Group_sidebar">
        <GroupSidebar />
      </div>
    </div>
    <div className="main_conaitner">
    
    <h2>RECENT ACTIVITY</h2>

    <div className="table_data line">
      <div className="flex_spaceBetween">
        <select name="ListNumbers" id="ListNumber">
          <option value="10">10</option>
          <option value="15">5</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <button onClick="">Add New Member</button>
      </div>
      <div className="box_2">
        <div className="flex_spaceBetween cursor" onClick={() => setOpenRecent(true)}>
        <div className="img_with_text">
                  <img src={Per} alt="Group pic"/>
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
      <div className="flex_spaceBetween">
        <p className="pagination_number">Showing 1 to 10 of 14 entries</p>
        <Pagination />
      </div>
    </div>
    
  
    </div>
  </div>
  </>
  )
}

export default RecentActivity;