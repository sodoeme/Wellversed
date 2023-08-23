import React from 'react';
import Calendar from '../components/calendar';
import npprofile from '../images/npprofile.jpeg';
import '../css/user.css';
import '../css/calendar.css';
// import { FaHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
// import { FaHouseDamage } from "react-icons/fa";
// import { FaSeedling } from "react-icons/fa";
// import { FaSyringe } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
// import { FaCode } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";






const orgpf = () => {
  return (
    <div className='User-Page'>

        <div className='Header'>
        <h1>Well-Ver$ed Education</h1>
       
    </div>

        <div className='Profile-Header'>
            <h2 className='Profile-Header-Text'>Organization Profile</h2>
        </div>

        <div className='User-info'>
            <img src={npprofile} alt="user profile pic"></img>
            <br />
            <h3>Share Charlotte</h3>
            <p>Non-Profit Organization</p>
            <br/>
            <p>Representative: John Doe</p>
            <p>Email: jdoe@gmail.com</p>
        
            <br/>
        

        <div className='volunteer-info'>
            <p>Joined date: 8/1/2020</p>
        </div>
        
    <br />

        <div className='About'>
            <h2>About Us</h2>
            
            <div className='about-info'>
                <p class='about-info-text'>Share Charlotte is a dynamic financial literacy program aimed at empowering individuals with essential money management skills. Through a combination of workshops, resources, and community engagement, Share Charlotte equips participants with the knowledge and tools necessary to make informed financial decisions.

The program covers a wide range of topics, including budgeting, saving, investing, debt management, and retirement planning. It fosters practical skills that help individuals navigate real-world financial challenges with confidence. By offering accessible and interactive educational modules, Share Charlotte strives to bridge the gap in financial knowledge, promoting financial independence and stability.
                </p>
                </div>
                </div>
                </div>
        
        

        <div className='Main-section'>

            <br/>
            <h2 className='prof-name'>Hi, Share Charlotte!</h2>
            <br />
            <br />
            
            
            
        

            <div className='causes-and-interests'>
                <h3>Causes</h3>
                <br/>
                {/* <p > <FaHeart className='icon'/> Health and Medical</p> 
                 */}
                <p> <FaGift className='icon' /> Donation </p> 
               
                {/* <p><FaHouseDamage className='icon' /> Disaster Relief </p> */}
                <p><FaHandHoldingHeart className='icon'  /> Community Support </p>
                {/* <p> <FaSeedling className='icon' /> Urban Agriculture </p> */}
                {/* <p> <FaSyringe className='icon' /> Healthcare Access </p>  */}
                <p> <FaMoneyBillWave className='icon' /> Philanthropy </p>
                
                
                <br />
            
                <button className='btn-main'>Add more</button>
               <br />
               
                <br />
                <h3>Interests</h3>
                
                <br />
                {/* <p> <FaCode className='icon'/> Programming</p> 
                <p> <FaGithubSquare className='icon'/> Github </p> 
               
                <p>  <FaHome className='icon'/> Affordable Housing </p> */}
                <p><FaHandHoldingHeart className='icon'/> Community Support </p>
                <p> <FaMoneyBillWave className='icon'/> Financial Literacy </p>
<br />
                <button className='btn-main'>Add more</button>
                
               
            </div>
            </div>

            <div className='calendar'>
                <h2>Your Schedule</h2>
                <br/>
                <br/>
                <Calendar/>
               
            <button>Request More Volunteer Opportunities</button>
                </div>
                
            </div>
            
            
         
    

        
        
            
      
    
  )
}

export default orgpf;
