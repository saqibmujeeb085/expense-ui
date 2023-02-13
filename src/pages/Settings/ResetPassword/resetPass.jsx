import React from 'react';
import SettingSidebar from '../../../components/Sidebars/SettingSidebar/settingSidebar';
import './resetPass.css';

const ResetPass = () => {
  return ( 
    <div classNameName="Container_width_main double_column">
    <div classNameName="with_sidebar">
      <div classNameName="Group_sidebar">
        <SettingSidebar />
      </div>
    </div>
    <div classNameName="main_conaitner">
    
    <h2>GENERAL</h2>
    <form>
    <div classNameName="box setting_page_general line">
      <div classNameName="user_data_input">
      <div classNameName="user_dta">
        <h4>Password</h4>
        <input classNameName="input" type="text" name="Uname" id="Uname" placeholder='Reset Password'/>
      </div>
      <div classNameName="user_dta">
      <h4>Revise Password</h4>
        <input classNameName="input" type="text" name="Uemail" id="Uname" placeholder='Revise Password'/>
      </div>
      </div>

    <div classNameName="sub_button">
    <button>Change Password</button>
    </div>
    </div>
    </form>
    </div>
  </div>
  )
}

export default ResetPass;