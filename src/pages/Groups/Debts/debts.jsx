import React, {useState} from 'react';
import GroupSidebar from '../../../components/Sidebars/GroupSidebar/groupSidebar';
import Clark from './../../../images/clark.png';
import Pagination from '../../../components/Pagination/pagination';
import './debts.css';
import SettleAllDebt from '../../../components/Modals/SettleAllDebt/settleAllDebt';



const Debts = () => {
  const [openDebts, setOpenDebts] = useState(false)
  return ( 
    <>
    {openDebts &&
    <SettleAllDebt changeState={setOpenDebts}/>
  }
    <div classNameName="Container_width_main double_column">
      <div classNameName="with_sidebar">
        <div classNameName="Group_sidebar">
          <GroupSidebar />
        </div>
      </div>
      <div classNameName="main_conaitner">
      
      <h2>Debts</h2>
      <div classNameName="table_data line">
        <div classNameName="flex_spaceBetween">
          <select name="ListNumbers" id="ListNumber">
            <option value="10">10</option>
            <option value="15">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <button>Settle All Debt</button>
        </div>
        <div classNameName="table center_table_containt">
        <table>
          <tr onClick={() => setOpenDebts(true)} className="cursor">
            <td>
            <div classNameName="debt_data_paid_by">   
            <img src={Clark} alt="Group" />
            <div classNameName="double_text">
            <h3>hasham</h3>
            <h5>$53</h5>
            </div>
            </div>
            </td>
            <td>
            <i classNameName="fa-solid fa-arrow-right"></i>
            </td>
            <td>
            <div classNameName="debt_data_paid_by">   
            <img src={Clark} alt="Group" />
            <div classNameName="double_text">
            <h3>hasham</h3>
            </div>
            </div>
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

export default Debts;