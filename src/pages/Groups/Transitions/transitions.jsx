import React from 'react';
import GroupSidebar from './../../../components/Sidebars/GroupSidebar/groupSidebar';
import './transitions.css';
import Clark from './../../../images/clark.png';
import Pagination from './../../../components/Pagination/pagination';
import './transitions.css'

const Transitions = () => {
  return ( 
    <div className="Container_width_main double_column">
      <div className="with_sidebar">
        <div className="Group_sidebar">
          <GroupSidebar />
        </div>
      </div>
      <div className="main_conaitner">
      
      <h2>TRANSACTIONS</h2>
      <div className="table_data line">
        <div className="flex_spaceBetween">
          <select name="ListNumbers" id="ListNumber">
            <option value="10">10</option>
            <option value="15">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <button onClick="">Add New Transaction</button>
        </div>
        <div className="table">
        <table>
          <thead>
          <tr>
            <th>
              Photo
            </th>
            <th>
            Transaction
            </th>
            <th>
            Paid by
            </th>
            <th>
            Date
            </th>
            <th>
            Amount
            </th>
          </tr>
          </thead>
          <tr>
            <td>
            <img src={Clark} alt="Group" />
            </td>
            <td>
            <h3>Lunch</h3>
            </td>
            <td>
            <h3>Hasham</h3>
            </td>
            <td>
            <h3>16-04-2021</h3>
            </td>
            <td>
             <h3>$500</h3>
            </td>
          </tr>
        </table>
        </div>
        <div className="flex_spaceBetween">
          <p className="pagination_number">Showing 1 to 10 of 14 entries</p>
          <Pagination />
        </div>
      </div>
    
      </div>
    </div>
  )
}

export default Transitions;