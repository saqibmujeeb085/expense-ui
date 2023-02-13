import React from 'react';
import SettingSidebar from '../../../components/Sidebars/SettingSidebar/settingSidebar';
import Upload from './../../../images/Upload.png'
import './general.css';

const General = () => {
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
      <h3>Personal Info</h3>
      
      <img src={Upload} alt="User_img"/>

      <div className="user_data_input">
      <div className="user_dta">
        <h4>User Name</h4>
        <input className="input" type="text" name="Uname" id="Uname" placeholder='Enter Username'/>
      </div>
      <div className="user_dta">
      <h4>Email</h4>
        <input className="input" type="text" name="Uemail" id="Uname" placeholder='Enter Your Email'/>
      </div>
      </div>

      <div className="sub_button">
    <button className="red">Discard</button>
    <button>Save Changes</button>
    </div>
    </div>
    </form>
    </div>
  </div>
  )
}

export default General;