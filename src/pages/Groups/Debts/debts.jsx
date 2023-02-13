import React from 'react';
import GroupSidebar from '../../../components/Sidebars/GroupSidebar/groupSidebar';
import Clark from './../../../images/clark.png';
import Pagination from '../../../components/Pagination/pagination';
import './debts.css';

const Debts = () => {
  return ( 
    <div className="Container_width_main double_column">
      <div className="with_sidebar">
        <div className="Group_sidebar">
          <GroupSidebar />
        </div>
      </div>
      <div className="main_conaitner">
      
      <h2>Debts</h2>
      <div className="table_data line">
        <div className="flex_spaceBetween">
          <select name="ListNumbers" id="ListNumber">
            <option value="10">10</option>
            <option value="15">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <button onClick="">Settle All Debt</button>
        </div>
        <div className="table center_table_containt">
        <table>
          <tr>
            <td>
            <div className="debt_data_paid_by">   
            <img src={Clark} alt="Group image" />
            <div className="double_text">
            <h3>hasham</h3>
            <h5>$53</h5>
            </div>
            </div>
            </td>
            <td>
            <i className="fa-solid fa-arrow-right"></i>
            </td>
            <td>
            <div className="debt_data_paid_by">   
            <img src={Clark} alt="Group image" />
            <div className="double_text">
            <h3>hasham</h3>
            </div>
            </div>
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

export default Debts;