// import React from 'react';
import React, { useState } from 'react';
import './courselist.css';
import Modal from "react-modal";
import Registerclassform from "./registerclassform";
import { Link } from "react-router-dom";




const Courselist = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <div className="table-wrapper">
      
        <h3 className='course-list-title'>Current Courses</h3>
        <table className='course-list'>
            <tr>
           <th>Date</th>
           <th>Time</th>
           <th>Event</th>
           <th>Instructor Signed Up</th>
           <th>Instructor Information</th>
           </tr>

           {/*  table data */}

           <tr>
            <td>8/31/2023</td>
            <td>8am-4pm</td>
            <td>Financial Literacy 101</td>
            <td style={{ color: 'green' }}>Yes</td>
            <td>Name: Jane Doe; Email:jdoe@gmail.com</td>
            </tr>

            <tr>
            <td>9/1/2023</td>
            <td>12am-5pm</td>
            <td>Mastering Investing Strategies</td>
            <td style={{ color: 'red' }}>No</td>
            <td></td>
            </tr>

            <tr>
            <td>9/2/2023</td>
            <td>8am-12pm</td>
            <td>Affordable Housing Essentials</td>
            <td style={{ color: 'green' }}>Yes</td>
            <td>Name: Jane Doe; Email:jdoe@gmail.com</td>
            </tr>

        </table>
        <br/>
        <div className='courselist-btn-styling'>
        <Link to="/schedule" className='courselist-btn' style={{
             marginLeft: '60px',
             textDecoration: 'none',
             padding: '10px',
             background: 'rgb(148, 13, 13)',
             color: 'white',
             borderRadius: '30px',
             border: 'none',
             cursor: 'pointer',
             width: '30%',
             textAlign: 'center'
             }}>View Full Schedule Here</Link>
        <button className='courselist-btn'onClick={openModal} 
        style={{
            marginLeft: '80px',
            textDecoration: 'none',
             padding: '10px',
             background: 'rgb(148, 13, 13)',
             color: 'white',
             borderRadius: '30px',
             border: 'none',
             cursor: 'pointer',
             width: '30%',
             textAlign: 'center',
             fontSize: '1em'
            }}
            >Request To Add Opportunities</button>
        </div>

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
    
  )
}

export default Courselist;

