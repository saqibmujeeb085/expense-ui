import React from 'react';
import './settleAllDebt.css';
import Per from './../../../images/per.png';

const SettleAllDebt = ({changeState}) => {
  return ( 
    <div className="fixed" >
      <form>
      <div className="modal">
        <div className="flex_spaceBetween">
          <h4>New Transfer</h4>
          <i onClick={()=>changeState(false)} className="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <div className="transfer_between">
          <h4>Transfer between</h4>
          <div className="transition_icon_with_text">
            <div className="paid_or_recieved">
            <img src={Per} alt="user"/>
            <h3>Hasham.Hanif</h3>
            <select name="paidorrec" id="paidorrec">
              <option value="paid">Paid</option>
            </select>
            </div>
            <div className="paid_or_recieved">
            <img src={Per} alt="user"/>
            <h3>Hasham.Hanif</h3>
            <select name="paidorrec" id="paidorrec">
              <option value="paid">Recieved</option>
            </select>
            </div>
          </div>
        </div>
        <div className="Amount">
            <input type="text" name="Amount" id="Amount" placeholder='Type Your Amount' className="input"/>
            </div>
            <div className="purpose">
              <h3>Purpose</h3>
              <div classNameName="purpose_option">
              <i className="fa-solid fa-bars"></i>
              <select name="debt" id="debt"> 
              <option value="Debt Settle">Debt Settle</option>
              </select>
              </div>
              <div className="upload">
                <input type="file" name="" id="" />
              </div>
            </div>
            
            <div classNameName="date_and_time">
              <h3>Date and Time</h3>
              <input className="input" type="datetime-local" name="" id="" />
            </div>
          <input className="long_butt" type="submit" value="Save" />
        </div>
        </form>
      </div>
  )
}

export default SettleAllDebt;