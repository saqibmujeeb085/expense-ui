import React from 'react';
import SettingSidebar from '../../../components/Sidebars/SettingSidebar/settingSidebar';
import Upload from './../../../images/Upload.png'
import './general.css';

const General = () => {
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
      <h3>Personal Info</h3>
      
      <img src={Upload} alt="User_img"/>

      <div classNameName="user_data_input">
      <div classNameName="user_dta">
        <h4>User Name</h4>
        <input classNameName="input" type="text" name="Uname" id="Uname" placeholder='Enter Username'/>
      </div>
      <div classNameName="user_dta">
      <h4>Email</h4>
        <input classNameName="input" type="text" name="Uemail" id="Uname" placeholder='Enter Your Email'/>
      </div>
      </div>

      <div classNameName="sub_button">
    <button classNameName="red">Discard</button>
    <button>Save Changes</button>
    </div>
    </div>
    </form>
    </div>
  </div>
  )
}

export default General;