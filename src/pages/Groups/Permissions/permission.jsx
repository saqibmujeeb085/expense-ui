import React from 'react';
import GroupSidebar from '../../../components/Sidebars/GroupSidebar/groupSidebar';
import Per from './../../../images/per.png';
import './permission.css';

const Permission = () => {
  return ( 
    <div classNameName="Container_width_main double_column">
    <div classNameName="with_sidebar">
      <div classNameName="Group_sidebar">
        <GroupSidebar />
      </div>
    </div>
    <div classNameName="main_conaitner">
    
    <h2>MEMBERS</h2>
    
    <div classNameName="permission_container line">
      <div classNameName="flex_spaceBetween">
        <h3>Joining Via Link</h3>
        <button><i classNameName="fa-solid fa-share-nodes"></i> Share Link</button>
      </div>
      <div classNameName="permission_checkbox">
        <input type="checkbox" name="Permission" id="Permission"/>
        <p>Anyone with the link can join this group</p>
      </div>
      <h3>Permission</h3>
      <p>These user accounts have access to this group.</p>
    <div classNameName="flex_spaceBetween mar_top">
        <div classNameName="img_with_text">
                  <img src={Per} alt="Group pic"/>
                  <div classNameName="Group_name">
                    <h3>Hasham.hanif</h3>
                    <h4>hasmhsda@gmail.com</h4>
                  </div>
                </div>
                
                <h3>Group Owner</h3>
                
        </div>
    </div>
    </div>
  </div>
  )
}

export default Permission;