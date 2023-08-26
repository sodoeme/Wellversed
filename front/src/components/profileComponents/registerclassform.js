<<<<<<< HEAD
import React, { useState } from 'react';
// import from './user.css';

const Registerclassform = () => {


    const [formData, setFormData] = useState({
        organizationName: '',
        representativeName: '',
        representativeEmail: '',
        course: '',
        courseDescription: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission or validation here
        console.log('Form submitted:', formData);
      };
=======
import React, { useState } from "react";
import User from "./user.css";

const Registerclassform = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    representativeName: "",
    representativeEmail: "",
    course: "",
    courseDescription: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or validation here
    console.log("Form submitted:", formData);
  };
>>>>>>> aubreyUpdated

  return (
    <div>
      {/* <h2>Registration Form</h2> */}
<<<<<<< HEAD
      <form className='req-form' onSubmit={handleSubmit}>
        <div>
          <label className='req-label'>Name of Organization:</label>
          <input 
            className='req-input'
=======
      <form className="req-form" onSubmit={handleSubmit}>
        <div>
          <label className="req-label">Name of Organization:</label>
          <input
            className="req-input"
>>>>>>> aubreyUpdated
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          />
        </div>
        <div>
<<<<<<< HEAD
          <label className='req-label'>Representative Name:</label>
          <input 
            className='req-input'
=======
          <label className="req-label">Representative Name:</label>
          <input
            className="req-input"
>>>>>>> aubreyUpdated
            type="text"
            name="representativeName"
            value={formData.representativeName}
            onChange={handleChange}
          />
        </div>
        <div>
<<<<<<< HEAD
          <label className='req-label'>Representative Email:</label>
          <input
            className='req-input'
=======
          <label className="req-label">Representative Email:</label>
          <input
            className="req-input"
>>>>>>> aubreyUpdated
            type="email"
            name="representativeEmail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
<<<<<<< HEAD
          <label className='req-label'>Name of Course:</label>
          <input
            className='req-input'
=======
          <label className="req-label">Name of Course:</label>
          <input
            className="req-input"
>>>>>>> aubreyUpdated
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <div>
<<<<<<< HEAD
          <label className='req-label'>Course Description:</label>
          <input
            className='req-input'
=======
          <label className="req-label">Course Description:</label>
          <input
            className="req-input"
>>>>>>> aubreyUpdated
            type="text"
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleChange}
          />
        </div>
<<<<<<< HEAD
        <button className='req-btn' type="submit">Submit Request</button>
      </form>
    </div>
  )
}
=======
        <button className="req-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
>>>>>>> aubreyUpdated

export default Registerclassform;
