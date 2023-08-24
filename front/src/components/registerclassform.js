import React, { useState } from 'react';

// images
import illustration from '../images/illustration.jpeg';

// css

import '../css/user.css';

const Registerclassform = () => {

    const [formData, setFormData] = useState({
        organizationName: '',
        representativeName: '',
        representativeEmail: '',
        course: '',
        courseDescription: '',
        
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

  return (
    <div>

<div className='container'>

    <div className='request-form-img'>
        <h2>Request To Add Opportunities</h2>
        <img className='form-img' src={illustration} alt='volunteer-hands'/>
    </div>



        <div className='registration-container'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of Organization:</label>
          <input
            type="text"
            name="orgName"
            value={formData.organizationName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Representative Name:</label>
          <input
            type="text"
            name="repName"
            value={formData.representativeName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Representive Email:</label>
          <input
            type="email"
            name="email"
            value={formData.representativeEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Course Name:</label>
          <input
            type="password"
            name="courseName"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Course Description:</label>
          <input
            type="password"
            name="courseName"
            value={formData.courseDescription}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      </div>





    </div>
    </div>
  )
}

export default Registerclassform;
