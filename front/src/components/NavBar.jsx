// Import React hooks, components, css
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./NavBar.css";
import Home from "./homeComponents/Home";
import Contact from "./contactComponents/Contact";
import Login from "./loginComponents/Login";
import SignUp from "./signUpComponents/SignUp";
import Schedule from "./scheduleComponents/schedule";
import Orgpf from "./profileComponents/Orgpf";
import Userpf from "./profileComponents/Userpf";
import Footer from "./Footer";

function NavBar() {
  // State to toggle navbar links
  const [showLinks, setShowLinks] = useState(false);
  //Set up to only show sigin in if not logged in
  //TALK TO BACKEND TEAM ABOUT SETTING UP TOKENS FOR THIS
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle links
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Router>
      <div className="header">
        <nav className="nav">
          <div className="nav-header">
            <h1>
              <Link to="/">WellVer$ed</Link>
              <FaBars className="menu-icon" onClick={toggleLinks} />
            </h1>
          </div>
          <div className={`links ${showLinks ? "show" : ""}`} id="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/orgpf">My Profile</Link>
              </li>
              {/* <li>
                <Link to="/userpf">My Profile</Link>
              </li> */}
              <li>
                <Link to="/schedule">Schedule</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                {!isLoggedIn && (
                  <div className="signin-section">
                    <Link to="/signin" className="signin-link">
                      Sign In
                      <FaUserCircle className="signin-icon" />
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add Myles' components */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/orgpf" element={<Orgpf />} />
        <Route path="/userpf" element={<Userpf />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default NavBar;
