import React from 'react';

const CreateGroups = ({changeState}) => {
  return ( 
    <div className="fixed" >
      <div className="modal">
        <div className="flex_spaceBetween">
          <h4>Create New Group</h4>
          <i onClick={()=>changeState(false)} className="fa-sharp fa-solid fa-xmark cursor"></i>
        </div>
        <form>
        <div className="input_of_modal">
          <div className="input_modal">
            <h3>Group Name</h3>
            <input type="text" name="groupName" id="groupName" placeholder='Group Name' className="input"/>
          </div>
          <div className="input_modal">
            <h3>Currency for Group Debts</h3>
            <select name="Currency" id="Currency">
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
            </select>
          </div>
          <input className="long_butt" type="submit" value="Create a new group" />
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreateGroups;