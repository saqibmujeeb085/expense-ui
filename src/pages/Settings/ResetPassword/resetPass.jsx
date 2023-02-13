import React from 'react';
import SettingSidebar from '../../../components/Sidebars/SettingSidebar/settingSidebar';
import './resetPass.css';

const ResetPass = () => {
  return ( 
    <div className="Container_width_main double_column">
    <div className="with_sidebar">
      <div className="Group_sidebar">
        <SettingSidebar />
      </div>
    </div>
    <div className="main_conaitner">
    
    <h2>GENERAL</h2>
    <form>
    <div className="box setting_page_general line">
      <div className="user_data_input">
      <div className="user_dta">
        <h4>Password</h4>
        <input className="input" type="text" name="Uname" id="Uname" placeholder='Reset Password'/>
      </div>
      <div className="user_dta">
      <h4>Revise Password</h4>
        <input className="input" type="text" name="Uemail" id="Uname" placeholder='Revise Password'/>
      </div>
      </div>

    <div className="sub_button">
    <button>Change Password</button>
    </div>
    </div>
    </form>
    </div>
  </div>
  )
}

export default ResetPass;