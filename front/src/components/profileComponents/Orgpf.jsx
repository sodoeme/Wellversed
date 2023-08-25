// import React from 'react';
import React, { useState } from "react";
import Modal from "react-modal";

// import components
import Calendar from "./calendar";
// import npprofile from "../images/npprofile.jpeg";
import Registerclassform from "./registerclassform";

// import css
import "./user.css";
import "./calendar.css";

// import icons
import { FaGift } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

const Orgpf = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="User-Page">
      <div className="User-info">
        <img src="/photos/npprofile.jpeg" alt="user profile pic" className="profile-image"></img>
        <br />
        <h3>Share Charlotte</h3>
        <p>Non-Profit Organization</p>
        <br />
        <p>Representative: John Doe</p>
        <p>Email: jdoe@gmail.com</p>

        <br />

        <div className="volunteer-info">
          <p>Joined date: 8/1/2020</p>
        </div>

        <br />

        <div className="About">
          <h2>About Us</h2>

          <div className="about-info">
            <p class="about-info-text">
              Share Charlotte is a dynamic financial literacy program aimed at empowering
              individuals with essential money management skills. Through a combination of
              workshops, resources, and community engagement, Share Charlotte equips participants
              with the knowledge and tools necessary to make informed financial decisions. The
              program covers a wide range of topics, including budgeting, saving, investing, debt
              management, and retirement planning. It fosters practical skills that help individuals
              navigate real-world financial challenges with confidence. By offering accessible and
              interactive educational modules, Share Charlotte strives to bridge the gap in
              financial knowledge, promoting financial independence and stability.
            </p>
          </div>
        </div>
      </div>

      <div className="Main-section">
        <br />
        <h2 className="prof-name">Hi, Share Charlotte!</h2>
        <br />
        <br />

        <div className="causes-and-interests">
          <h3>Our Causes</h3>
          <br />

          <p>
            {" "}
            <FaGift className="icon" /> Donation{" "}
          </p>

          <p>
            <FaHandHoldingHeart className="icon" /> Community Support{" "}
          </p>

          <p>
            {" "}
            <FaMoneyBillWave className="icon" /> Philanthropy{" "}
          </p>

          <br />

          <button className="btn-main">Add more</button>
          <br />

          <br />
          <h3>Our Interests</h3>

          <br />

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

        <button onClick={openModal}>Request More Volunteer Opportunities</button>

        {/* Modal */}

        <Modal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal}  
        style={{
          content: {
            width: "700px",
            maxHeight: "70%",
            margin: "auto",
          },
        }}>
          <h2>Volunteer Request Form</h2>
          <br/>
          <br/>
          {/* Add modal content here */}
          <Registerclassform />

          {/* <button onClick={closeModal}>Close</button> */}
        </Modal>
      </div>
    </div>
  );
};

export default Orgpf;
