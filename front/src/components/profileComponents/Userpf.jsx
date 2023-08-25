import React from "react";


// components
import Calendar from "./calendar";

// css
import "./user.css";
import "./calendar.css";

// icons
import { FaHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";

const Userpf = () => {
  return (
    <div className="User-Page">
      {/* <div className="Header">
<h1>Well-Ver$ed Education</h1>
</div>
<div className="Profile-Header">
<h2 className="Profile-Header-Text">Your Profile</h2>
</div> */}
      <div className="User-info">
        <img src="/photos/headshot.jpeg" alt="user profile pic" className="profile-image"></img>
        <br />
        <h3>Jane Doe</h3>
        <p>Software Engineer</p>
        <br />
        <p>Email: jdoe@gmail.com</p>

        <br />

        <div className="volunteer-info">
          <p>Joined date: 8/1/2023</p>
          <p>hours worked: 100</p>
        </div>

        <br />

        <div className="About">
          <h2 className="about-header">About Me</h2>

          <div className="about-info">
            <p class="about-info-text">
              I'm Jane Doe, a dedicated software engineer and enthusiastic volunteer. By day, I
              excel in coding, crafting solutions, and embracing tech challenges. By night, I'm
              passionate about leveraging my skills to make a positive impact. As a volunteer, I'm
              committed to using software engineering to empower underserved communities and support
              meaningful causes. From coding for social good to mentoring aspiring developers, I
              thrive on giving back. Beyond the screen, I'm an adventurer, an aspiring chef, and a
              tech advocate. Join me in this dual journey of coding innovation and community
              enrichment.
            </p>
          </div>
        </div>
      </div>

      <div className="Main-section">
        <br />
        <h2 className="prof-name">Hi, Jane!</h2>
        <br />
        <br />

        <div className="causes-and-interests">
          <h3>Your Causes</h3>
          <br />
          <p>
            {" "}
            <FaHeart className="icon" /> Health and Medical
          </p>

          <p>
            {" "}
            <FaGift className="icon" /> Donation{" "}
          </p>

          <p>
            <FaHouseDamage className="icon" /> Disaster Relief{" "}
          </p>
          <p>
            <FaHandHoldingHeart className="icon" /> Community Support{" "}
          </p>
          <p>
            {" "}
            <FaSeedling className="icon" /> Urban Farming{" "}
          </p>
          <p>
            {" "}
            <FaSyringe className="icon" /> Healthcare Access{" "}
          </p>
          <p>
            {" "}
            <FaMoneyBillWave className="icon" /> Philanthropy{" "}
          </p>

          <br />

          <button className="btn-main">Add more</button>
          <br />

          <br />
          <h3>Your Interests</h3>

          <br />
          <p>
            {" "}
            <FaCode className="icon" /> Programming
          </p>
          <p>
            {" "}
            <FaGithubSquare className="icon" /> Github{" "}
          </p>

          <p>
            {" "}
            <FaHome className="icon" /> Affordable Housing{" "}
          </p>
          <p>
            <FaHandHoldingHeart className="icon" /> Community Support{" "}
          </p>
          <p>
            {" "}
            <FaMoneyBillWave className="icon" /> Financial Literacy{" "}
          </p>
          <br />

          <button className="btn-main">Add more</button>
        </div>
      </div>

      <div className="calendar">
        <h2>Your Schedule</h2>
        <br />
        <br />
        <Calendar />

        {/* <Link to="/volunteerSchedule"> */}
        <Link to="/schedule"
        style={{
          textDecoration: 'none',
          padding: '10px',
          background: 'rgb(148, 13, 13)',
          color: 'white',
          borderRadius: '30px',
          border: 'none',
          cursor: 'pointer',
          width: '30%',
          textAlign: 'center'
          }}
        >Go To Full Schedule</Link>
        
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Userpf;
