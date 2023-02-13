import React from 'react';
import './newTransacton.css';
import Per from './../../../images/per.png'

const NewTransaction = ({changeState}) => {
  return (
    <div class="fixed" >
      <form>
      <div class="modal">
        <div class="flex_spaceBetween">
          <h4>New Transfer</h4>
          <i onClick={()=>changeState(false)} class="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <div class="transfer_between">
          <h4>Transfer between</h4>
          <div class="transition_icon_with_text">
            <div class="paid_or_recieved">
            <img src={Per} alt="user"/>
            <h3>Hasham.Hanif</h3>
            <select name="paidorrec" id="paidorrec">
              <option value="Recieved">Recieved</option>
            </select>
            </div>
            <div class="paid_or_recieved">
            <img src={Per} alt="user"/>
            <h3>Hasham.Hanif</h3>
            <select name="paidorrec" id="paidorrec">
              <option value="Gave">Gave</option>
            </select>
            </div>
          </div>
        </div>
        <div class="Amount">
            <input type="text" name="Amount" id="Amount" placeholder='Type Your Amount' class="input"/>
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

export default NewTransaction;