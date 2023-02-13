import React from "react";
import { Link } from "react-router-dom";
import "./forgetPassword.css";
import Logo from "./../../../images/Logo.png";

const ForgetPassword = () => {
  return (
    <div classNameName="forgetpass_page_container bg_img">
      <div classNameName="forgetpass_form_container bg_color">
        <div classNameName="logo_image_and_text">
          <img src={Logo} alt="logo" />
          <h2>Forgot Password!</h2>
          <p>Please enter your mail</p>
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
              <input type="submit" value="Proceed" classNameName="long_butt" />
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

export default ForgetPassword;
