import React, {useState} from 'react';
import GroupSidebar from './../../../components/Sidebars/GroupSidebar/groupSidebar';
import './transitions.css';
import Clark from './../../../images/clark.png';
import Pagination from './../../../components/Pagination/pagination';
import './transitions.css'
import NewTransitions from '../../../components/Modals/NewTransitions/newTransitions';

const Transitions = () => {
  const [opentransition, setOpentransition] = useState(false)
  return ( 
    <>
    {opentransition &&
    <NewTransitions changeState={setOpentransition}/>
  }
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
          <div className="line bg_color_box">
            <div className="boxes">
              <h3>Group Name</h3>
              <h5>Trip</h5>
            </div>
            <div className="boxes">
            <h3>Total Members</h3>
              <h5>23</h5>
            </div>
            <div className="boxes">
            <h3>Total Paid</h3>
              <h5>$300</h5>
            </div>
          </div>
          <button onClick={() => setOpentransition(true)}>Add New Transaction</button>
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
    </>
  )
}

export default Transitions;