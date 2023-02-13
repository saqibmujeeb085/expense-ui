import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../images/Logo.png";
import "./signup.css";

const Signup = () => {
  return (
    <div classNameName="signup_page_container bg_img">
      <div classNameName="signup_form_container bg_color">
        <div classNameName="logo_image_and_text">
          <img src={Logo} alt="logo" />
          <h2>Get Started</h2>
          <p>It's free to signup and only takes a minute.</p>
        </div>
        <div classNameName="form_container">
          <form>
            <div classNameName="duoble_input">
              <input
                type="text"
                name="Fname"
                id="Fname"
                placeholder="First Name"
                classNameName="input"
              />
              <input
                type="text"
                name="Lname"
                id="Lname"
                placeholder="Last Name"
                classNameName="input"
              />
            </div>
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
                type="text"
                name="Password"
                id="Password"
                placeholder="Password"
                classNameName="input"
              />
            </div>
            <div classNameName="pad-top">
              <input type="submit" value="Create Account" classNameName="long_butt" />
            </div>
          </form>
        </div>
        <div classNameName="create_account_link">
          <p>
            Already have an account?{" "}
            <Link to="/" classNameName="link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
