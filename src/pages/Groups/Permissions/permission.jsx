import React from 'react';
import GroupSidebar from '../../../components/Sidebars/GroupSidebar/groupSidebar';
import Per from './../../../images/per.png';
import './permission.css';

const Permission = () => {
  return ( 
    <div className="Container_width_main double_column">
    <div className="with_sidebar">
      <div className="Group_sidebar">
        <GroupSidebar />
      </div>
    </div>
    <div className="main_conaitner">
    
    <h2>MEMBERS</h2>
    
    <div className="permission_container line">
      <div className="flex_spaceBetween">
        <h3>Joining Via Link</h3>
        <button><i className="fa-solid fa-share-nodes"></i> Share Link</button>
      </div>
      <div className="permission_checkbox">
        <input type="checkbox" name="Permission" id="Permission"/>
        <p>Anyone with the link can join this group</p>
      </div>
      <h3>Permission</h3>
      <p>These user accounts have access to this group.</p>
    <div className="flex_spaceBetween mar_top">
        <div className="img_with_text">
                  <img src={Per} alt="Group pic"/>
                  <div className="Group_name">
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