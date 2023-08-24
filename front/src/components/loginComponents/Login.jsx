import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="main-login">
      <div className="content">
        <div className="headings">
          <h1>Log In</h1>
          <div className="border-container">
            <div className="border"></div>
          </div>
          <h2 className="signin-blurb">
            No account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up here
            </Link>
          </h2>
        </div>
        <div className="img-container">
          <FaUserFriends className="login-icon" />
        </div>

        <form action="/user" method="post">
          <div className="form-group-container">
            <div className="form-group">
              <label className="label" htmlFor="username">
                Username:
              </label>
              <input
                className="input"
                type="text"
                id="username"
                name="userName"
                required
                placeholder="Username"
              />
            </div>
          </div>

          <div className="form-group-container">
            <div className="form-group">
              <label className="label" htmlFor="password">
                Password:
              </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
              />
            </div>
          </div>

          <div className="form-group-container">
            <label className="checkbox-label">
              <input type="checkbox" id="agree" name="agree" className="terms-blurb" required />I
              agree to the terms and conditions.
            </label>
          </div>

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

export default Login;
