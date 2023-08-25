import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";
import TextInput from "../signUpComponents/TextInput";

const LoginOrg = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Please fill out all required fields.");
      return;
    }

    // Add validation to check username and password in database
    // if (username is not a match || password is not a match) {
    //   alert("Inccorect username or password. Please try again");
    //   return;
    // }

    // If all validations pass, you can proceed with submission
    // Replace with (log-in pass or tokens? and) link to homepage
    alert("Logged in successfully!");
    window.location.href = "/orgpf";
  };

  return (
    <div className="main-login">
      <div className="content">
        <div className="headings">
          <h1 className="contact-header">Log In</h1>
          <div className="border-container">
            <div className="border"></div>
          </div>
          <hr className="header-divider" />
          <h2 className="account-header">No account?</h2>
          <Link to="/signuporg" className="signup-link">
            <h2 className="signin-blurb"> Organizations sign up here</h2>
          </Link>
          <Link to="/signupuser" className="signup-link">
            <h2 className="signin-blurb"> Volunteers sign up here</h2>
          </Link>
        </div>
        <div className="img-container">
          <FaUserFriends className="login-icon" />
        </div>

        <form onSubmit={handleFormSubmit}>
          <TextInput
            id="username"
            name="username"
            label="Username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <TextInput
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <Link to="/" className="forgot-blurb">
            Forgot your username or password?
          </Link>

          <div className="submit-container">
            <input type="submit" className="submit" value="Log In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginOrg;
