import React from 'react';
import Per from './../../../images/per.png'
import './newTransitions.css'

const NewTransitions = ({changeState}) => {
  return ( 
    <div className="fixed" >
      <form>
      <div className="modal">
        <div className="flex_spaceBetween">
          <h4>New Expense</h4>
          <i onClick={()=>changeState(false)} className="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <div className="transfer_between">
          <h4>Who Paid</h4>
          <div className="transition_icon_with_text"> 
            <div className="paid_or_recieved">
            <img src={Per} alt="user"/>
            <h3>Hasham.Hanif</h3>
            <h4>Paid</h4>
            </div>
          </div>
        </div>
        <div className="Amount">
            <input type="text" name="Amount" id="Amount" placeholder='Type Your Amount' className="input"/>
            </div>

         <div className="from_whom">
          <div className="from_whom_box">
            <img src={Per} alt="user"/>
            <div className="from_whom_name_and_amount">
              <h3>Hisham</h3>
              <h4>$0</h4>
            </div>
          </div>
            <input type="checkbox" name="user" id="user" />
         </div>

            <div className="purpose">
              <h3>Purpose</h3>
              <div className="purpose_option">
              <i className="fa-solid fa-bars"></i>
              <select name="debt" id="debt"> 
              <option value="Debt Settle">Debt Settle</option>
              </select>
              </div>
              <div className="upload">
                <input type="file" name="" id="" />
              </div>
            </div>
            
            <div className="date_and_time">
              <h3>Date and Time</h3>
              <input className="input" type="datetime-local" name="" id="" />
            </div>
          <input className="long_butt" type="submit" value="Save" />
        </div>
        </form>
      </div>
  )
}

export default NewTransitions;