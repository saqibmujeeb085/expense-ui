import React from 'react';

const NewFriend = ({changeState}) => {
  return ( 
    <div className="fixed" >
      <form>
      <div className="modal">
        <div className="flex_spaceBetween">
          <h4>New Friend</h4>
          <i onClick={()=>changeState(false)} className="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <div className="transfer_between">
          <h4>New Member</h4>
        </div>
        <div className="Amount">
            <input type="text" name="Amount" id="Amount" placeholder='Type Friend Name' className="input"/>
            </div>

          <input className="long_butt" type="submit" value="Save" />
        </div>
        </form>
      </div>
  )
}

export default NewFriend;