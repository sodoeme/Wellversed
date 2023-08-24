import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="content">
        <div className="headings">
          <h1>Create Your Account</h1>
          <hr className="header-divider"></hr>
          <div className="border-container">
            <div className="border"></div>
          </div>
          <h2 className="signup-blurb">
            To book classes, get involved, receive our newsletter and much more, sign up for a free
            account
          </h2>
        </div>

        <form action="/user/signup" method="post">
          <div className="form-group-container">
            <div className="form-group">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="form-group-container">
            <label className="checkbox-label">
              <input className="box" type="checkbox" id="agree" name="agree" required />
              Recieve our weekly newsletter via email
            </label>
          </div>

          <div className="form-group-container">
            <div className="form-group">
              <label className="label" htmlFor="organization">
                Organization
              </label>
              <input
                className="input"
                type="text"
                id="organization"
                name="organization"
                required
                placeholder="Organization"
              />
            </div>
          </div>

          <div className="form-group-container">
            <div className="form-group">
              <label className="label" htmlFor="username">
                Username
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
                Password
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
            <div className="form-group">
              <label className="label" htmlFor="password">
                Confirm
              </label>
              <input
                className="input"
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                placeholder="Confirm Password"
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
            <input type="submit" className="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
