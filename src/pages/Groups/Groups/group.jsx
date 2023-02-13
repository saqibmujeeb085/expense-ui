import React from 'react';
import './group.css';
import Clark from './../../../images/clark.png';
import Pagination from './../../../components/Pagination/pagination';


const Group = () => {
  return ( 
    <div className="Container_width_main">
      <h2>GROUPS</h2>
      <div className="table_data line">
        <div className="flex_spaceBetween">
          <select name="ListNumbers" id="ListNumber">
            <option value="10">10</option>
            <option value="15">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <button onClick="">Create new group</button>
        </div>
        <div className="table">
        <table>
          <thead>
          <tr>
            <th>
              Photo
            </th>
            <th>
              Group Name
            </th>
            <th>
              Type
            </th>
            <th>
              Created At
            </th>
            <th>
              Actions
            </th>
          </tr>
          </thead>
          <tr>
            <td>
            <img src={Clark} alt="Group image" />
            </td>
            <td>
            <h3>Clark</h3>
            </td>
            <td>
            <h3>Trip</h3>
            </td>
            <td>
            <h3>16-04-2021</h3>
            </td>
            <td>
            <div className="action_buttons">
            <i className="fa-solid fa-pencil"></i>
            <i className="fa-solid fa-eye"></i>
            <i className="fa-solid fa-trash"></i>
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
  )
}

export default Group;