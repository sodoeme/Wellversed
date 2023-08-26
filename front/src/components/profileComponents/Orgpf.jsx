import React from "react";

// import components

// import css
import "./user.css";

// import icons
import { FaGift } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import Courselist from "./courselist";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Orgpf = () => {
  const data = useAuth();
  const [org, setOrg] = useState({name:'', email:'', ref:{ name: '', phone: ''} });

  useEffect(() => {
    fetch(`http://localhost:3500/organization/organization/${data.email}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json().then((data) => ({
          status: response.status,
          data: data,
        }));
      })
      .then((result) => {
        const { status, data } = result;
        
        if (status != 200) {
          alert(data.message);
          return;
        }

        setOrg(data[0])
        console.log(org)
      })
      .catch((error) => {
        //console.error("Error fetching: ", error);
      });
  }, [data]);

  return (
    // user info section
    <div className="User-Page">
      <div className="User-info">
        <img
          src="/photos/npprofile.jpeg"
          alt="user profile pic"
          className="profile-image"
        ></img>
        <br />
        <h3>{org.name}</h3>
        <p>Non-Profit Organization</p>
        <br />
        <p>Representative: {org.ref.name}</p>
        <p>Contact: {org.ref.phone}</p>

        <br />

      

        <br />

        <div className="About">
          <h2>About Us</h2>

          <div className="about-info">
            <p class="about-info-text">
              Share Charlotte is a dynamic financial literacy program aimed at
              empowering individuals with essential money management skills.
              Through a combination of workshops, resources, and community
              engagement, Share Charlotte equips participants with the knowledge
              and tools necessary to make informed financial decisions. The
              program covers a wide range of topics, including budgeting,
              saving, investing, debt management, and retirement planning. It
              fosters practical skills that help individuals navigate real-world
              financial challenges with confidence. By offering accessible and
              interactive educational modules, Share Charlotte strives to bridge
              the gap in financial knowledge, promoting financial independence
              and stability.
            </p>
          </div>
        </div>
      </div>

      {/* main info section of profile */}

      <div className="Main-section">
        <br />
        <h2 className="prof-name">Hi, {org.name}</h2>
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

      {/* course section of profile */}

      <div className="calendar">
        <Courselist />
      </div>
    </div>
  );
};

export default Orgpf;
