import React from "react";
import { Link } from "react-router-dom";
import "./forgetPassword.css";
import Logo from "./../../../images/Logo.png";

const ForgetPassword = () => {
  return (
    <div className="forgetpass_page_container bg_img">
      <div className="forgetpass_form_container bg_color">
        <div className="logo_image_and_text">
          <img src={Logo} alt="logo" />
          <h2>Forgot Password!</h2>
          <p>Please enter your mail</p>
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
              <input type="submit" value="Proceed" className="long_butt" />
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

export default ForgetPassword;
