import React from "react";
import "./login.css";
import Logo from "./../../images/Logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_page_container bg_img">
      <div className="login_form_container bg_color">
        <div className="logo_image_and_text">
          <img src={Logo} alt="logo" />
          <h2>Welcome Back!</h2>
          <p>Please sign in to continue.</p>
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
                placeholder="Password"
                className="input"
              />
            </div>
            <div className="flex_spaceBetween">
              <Link to="/ForgetPassword/ConfirmEmail" className="link">
                Forget Password?
              </Link>
              <input type="submit" value="Login" className="short_butt" />
            </div>
          </form>
        </div>
        <div className="create_account_link">
          <p>
            Don't have an account?{" "}
            <Link to="/Signup" className="link">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
