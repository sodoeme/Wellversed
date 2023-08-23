// Import React hooks, components, css
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./NavBar.css";
import Home from "./homeComponents/Home";
import Contact from "./contactComponents/Contact";
import Login from "./loginComponents/Login";
import Footer from "./Footer";

function NavBar() {
  // State to toggle navbar links
  const [showLinks, setShowLinks] = useState(false);
  //Set up to only show sigin in if not logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle links
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    // Router provides browser history
    <Router>
      <div className="header">
        <nav className="nav">
          <div className="nav-header">
            <h1>
              <Link to="/">WellVer$ed</Link>
              <FaBars className="icon" onClick={toggleLinks} />
            </h1>
          </div>
          <div className={`links ${showLinks ? "show" : ""}`} id="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
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
          {/* <div className="signin-section">
            <Link to="/signin" className="signin-link">
              Sign In <FaUserCircle className="signin-icon" />
            </Link>
          </div> */}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adjust paths to created components */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default NavBar;
