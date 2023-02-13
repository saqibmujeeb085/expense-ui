import React from 'react';
import Per from './../../../images/per.png'
import './newTransitions.css'

const NewTransitions = ({changeState}) => {
  return ( 
    <div class="fixed" >
      <form>
      <div class="modal">
        <div class="flex_spaceBetween">
          <h4>New Expense</h4>
          <i onClick={()=>changeState(false)} class="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <div class="transfer_between">
          <h4>Who Paid</h4>
          <div class="transition_icon_with_text"> 
            <div class="paid_or_recieved">
            <img src={Per} alt="user"/>
            <h3>Hasham.Hanif</h3>
            <h4>Paid</h4>
            </div>
          </div>
        </div>
        <div class="Amount">
            <input type="text" name="Amount" id="Amount" placeholder='Type Your Amount' class="input"/>
            </div>

         <div class="from_whom">
          <div class="from_whom_box">
            <img src={Per} alt="user"/>
            <div class="from_whom_name_and_amount">
              <h3>Hisham</h3>
              <h4>$0</h4>
            </div>
          </div>
            <input type="checkbox" name="user" id="user" />
         </div>

            <div class="purpose">
              <h3>Purpose</h3>
              <div className="purpose_option">
              <i class="fa-solid fa-bars"></i>
              <select name="debt" id="debt"> 
              <option value="Debt Settle">Debt Settle</option>
              </select>
              </div>
              <div class="upload">
                <input type="file" name="" id="" />
              </div>
            </div>
            
            <div className="date_and_time">
              <h3>Date and Time</h3>
              <input class="input" type="datetime-local" name="" id="" />
            </div>
          <input class="long_butt" type="submit" value="Save" />
        </div>
        </form>
      </div>
  )
}

export default NewTransitions;