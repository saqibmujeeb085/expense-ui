import React from 'react';

const NewFriend = ({changeState}) => {
  return ( 
    <div class="fixed" >
      <form>
      <div class="modal">
        <div class="flex_spaceBetween">
          <h4>New Friend</h4>
          <i onClick={()=>changeState(false)} class="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <div class="transfer_between">
          <h4>New Member</h4>
        </div>
        <div class="Amount">
            <input type="text" name="Amount" id="Amount" placeholder='Type Friend Name' class="input"/>
            </div>

          <input class="long_butt" type="submit" value="Save" />
        </div>
        </form>
      </div>
  )
}

export default NewFriend;