import React, { useState } from 'react';
import GroupSidebar from '../../../components/Sidebars/GroupSidebar/groupSidebar';
import Clark from './../../../images/clark.png';
import Pagination from '../../../components/Pagination/pagination';
import './members.css';
import NewMember from '../../../components/Modals/NewMember/newMember';

const Members = () => {
  
  const [openNewMember, setOpenNewMember] = useState(false);

  return (
    <> 
    { openNewMember &&
    <NewMember changeState={setOpenNewMember} />
    }
    <div classNameName="Container_width_main double_column">
    <div classNameName="with_sidebar">
      <div classNameName="Group_sidebar">
        <GroupSidebar />
      </div>
    </div>
    <div classNameName="main_conaitner">
    
    <h2>MEMBERS</h2>
    <div classNameName="table_data line">
      <div classNameName="flex_spaceBetween">
        <select name="ListNumbers" id="ListNumber">
          <option value="10">10</option>
          <option value="15">5</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <button onClick={() => setOpenNewMember(true)}>Add New Member</button>
      </div>
      <div classNameName="table center_table_containt">
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tr>
            <td>
            <img src={Clark} alt="Group" />
            </td>
            <td>
            <h3>Hasham</h3>
            </td>
            <td>   
            <h3>$500</h3>
            </td>
          </tr>
      </table>
      </div>
      <div classNameName="flex_spaceBetween">
        <p classNameName="pagination_number">Showing 1 to 10 of 14 entries</p>
        <Pagination />
      </div>
    </div>
  
    </div>
  </div>
  </>
  )
}

export default Members;