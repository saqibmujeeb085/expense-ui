import React from "react";
import { Link } from "react-router-dom";
import "./resetPassword.css";
import Logo from "./../../../images/Logo.png";

const ResetPassword = () => {
  return (
    <div className="resetPass_page_container bg_img">
      <div className="resetPass_form_container bg_color">
        <div className="logo_image_and_text">
          <img src={Logo} alt="logo" />
          <h2>Reset Password!</h2>
          <p>Enter your mail and reset your password</p>
        </div>
        <div className="form_container">
          <form>
            <div>
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email"
                className="input"
              />
            </div>
            <div>
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Enter Your New Password"
                className="input"
              />
            </div>
            <div>
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Revise Your New Password"
                className="input"
              />
            </div>
            <div>
              <input type="submit" value="Reset Password" className="long_butt" />
            </div>
          </form>
        </div>
        <div className="create_account_link">
          <p>
            Take me back to{" "}
            <Link to="/" className="link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
