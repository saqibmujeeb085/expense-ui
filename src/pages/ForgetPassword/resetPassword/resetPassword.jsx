import React from "react";
import { Link } from "react-router-dom";
import "./resetPassword.css";
import Logo from "./../../../images/Logo.png";

const ResetPassword = () => {
  return (
    <div classNameName="resetPass_page_container bg_img">
      <div classNameName="resetPass_form_container bg_color">
        <div classNameName="logo_image_and_text">
          <img src={Logo} alt="logo" />
          <h2>Reset Password!</h2>
          <p>Enter your mail and reset your password</p>
        </div>
        <div classNameName="form_container">
          <form>
            <div>
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email"
                classNameName="input"
              />
            </div>
            <div>
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Enter Your New Password"
                classNameName="input"
              />
            </div>
            <div>
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Revise Your New Password"
                classNameName="input"
              />
            </div>
            <div>
              <input type="submit" value="Reset Password" classNameName="long_butt" />
            </div>
          </form>
        </div>
        <div classNameName="create_account_link">
          <p>
            Take me back to{" "}
            <Link to="/" classNameName="link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
