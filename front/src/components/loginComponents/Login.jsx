import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="content">
        <div className="headings">
          <h1>Log In</h1>
          <div className="border-container">
            <div className="border"></div>
          </div>
          <h2>
            No account? <a href="/user/signup">Sign up here</a>
          </h2>
        </div>
        <div className="img-container">
          <img className="login-img" src="/imgs/login-img.png" alt="" />
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
              <input type="checkbox" id="agree" name="agree" required />I agree to the terms and
              conditions.
            </label>
          </div>

          <div className="submit-container">
            <input type="submit" className="submit" value="Log In" />
          </div>
        </form>
      </div>

      <div className="forgot">
        <h2>
          <a href="/"> Forgot your username or password? </a>
        </h2>
      </div>
    </>
  );
};

export default Login;
