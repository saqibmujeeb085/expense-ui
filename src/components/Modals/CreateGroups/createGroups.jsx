import React from 'react';

const CreateGroups = ({changeState}) => {
  return ( 
    <div class="fixed" >
      <div class="modal">
        <div class="flex_spaceBetween">
          <h4>Create New Group</h4>
          <i onClick={()=>changeState(false)} class="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <form>
        <div class="input_of_modal">
          <div class="input_modal">
            <h3>Group Name</h3>
            <input type="text" name="groupName" id="groupName" placeholder='Group Name' class="input"/>
          </div>
          <div class="input_modal">
            <h3>Currency for Group Debts</h3>
            <select name="Currency" id="Currency">
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
            </select>
          </div>
          <input class="long_butt" type="submit" value="Create a new group" />
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreateGroups;