import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../images/Logo.png";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup_page_container bg_img">
      <div className="signup_form_container bg_color">
        <div className="logo_image_and_text">
          <img src={Logo} alt="logo" />
          <h2>Get Started</h2>
          <p>It's free to signup and only takes a minute.</p>
        </div>
        <div className="form_container">
          <form>
            <div className="duoble_input">
              <input
                type="text"
                name="Fname"
                id="Fname"
                placeholder="First Name"
                className="input"
              />
              <input
                type="text"
                name="Lname"
                id="Lname"
                placeholder="Last Name"
                className="input"
              />
            </div>
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
                type="text"
                name="Password"
                id="Password"
                placeholder="Password"
                className="input"
              />
            </div>
            <div className="pad-top">
              <input type="submit" value="Create Account" className="long_butt" />
            </div>
          </form>
        </div>
        <div className="create_account_link">
          <p>
            Already have an account?{" "}
            <Link to="/" className="link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
