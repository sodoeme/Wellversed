import React, { useState, useEffect } from "react";
import "./Contact.css";
import TeamMember from "./TeamMember";
import FormGroup from "./FormGroup";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    phone: "",
    email: "",
    // organization: "",
    reason: "",
    comment: "",
  });

  const [showTeam, setShowTeam] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setShowTeam(true);
    }
  }, []);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (
      !contactFormData.name ||
      !contactFormData.reason ||
      // !contactFormData.organization ||
      !contactFormData.comment
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (!isValidPhone(contactFormData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!isValidEmail(contactFormData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Form submission logic (example: sending an email)
    const emailSubject = "Contact Form Submission";
    const emailBody = `Name: ${contactFormData.name}\nEmail: ${contactFormData.email}\nPhone: ${contactFormData.phone}\nReason: ${contactFormData.reason}\nComment: ${contactFormData.comment}`;
    const emailLink = `mailto:amoyamen44@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = emailLink;

    // Reset form fields
    setContactFormData({
      name: "",
      email: "",
      phone: "",
      // organization: "",
      reason: "",
      comment: "",
    });
  };

  const isValidPhone = (phone) => {
    const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    return phonePattern.test(phone);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const toggleTeamVisibility = () => {
    setShowTeam(!showTeam);
  };

  return (
    <>
      <h1 className="contact-header">Contact Us</h1>
      <hr className="team-divider" />
      <h2 className="team-header" onClick={toggleTeamVisibility}>
        Meet the Team
      </h2>
      {showTeam && (
        <div className="team-container">
          <TeamMember
            name="Success Odoemena"
            role="Chief Executive Officer"
            image="../photos/Success.jpeg"
          />
          <TeamMember
            name="Aubrey M. Trotter"
            role="Community Engagement Director"
            image="../photos/Aubrey.jpeg"
          />
          <TeamMember
            name="Kevin M. Torres"
            role="Chief Financial Officer"
            image="../photos/Kevin.jpeg"
          />
          <TeamMember
            name="Myles Kelly"
            role="Chief Strategy Officer"
            image="../photos/Myles.jpeg"
          />
          <TeamMember
            name="D'Andre Derr"
            role="Director of Operations"
            image="../photos/DAndre.jpeg"
          />
        </div>
      )}
      <hr className="team-divider" />
      <h5>
        Please fill out the form below to get in contact with a member of our team. Typical response
        is 1 to 3 business days.
      </h5>
      <form onSubmit={handleContactSubmit}>
        <FormGroup
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={contactFormData.name}
          onChange={handleContactChange}
          required
        />
        {/* <FormGroup
          label="Organization"
          id="organization"
          name="organization"
          type="text"
          placeholder="Organization Name"
          value={contactFormData.organization}
          onChange={handleContactChange}
          required
        /> */}
        <FormGroup
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
          value={contactFormData.email}
          onChange={handleContactChange}
          required
        />
        <FormGroup
          className="input"
          label="Phone"
          id="phone"
          name="phone"
          type="tel"
          placeholder="(000) 000-0000"
          value={contactFormData.phone}
          onChange={handleContactChange}
          required
        />
        <FormGroup
          label="Reason"
          id="reason"
          name="reason"
          type="text"
          placeholder="Reason for contact..."
          value={contactFormData.reason}
          onChange={handleContactChange}
          required
        />
        <FormGroup
          label="Comment"
          id="comment"
          name="comment"
          type="text"
          placeholder="Your comment here..."
          value={contactFormData.comment}
          onChange={handleContactChange}
          required
        />
        <div className="submit-container">
          <input type="submit" className="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Contact;

// import React, { useState, useEffect } from "react";
// import "./Contact.css";
// import TeamMember from "./TeamMember";
// import FormGroup from "./FormGroup";

// const Contact = () => {
//   const [contactFormData, setContactFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     organization: "",
//     reason: "",
//     comment: "",
//   });

//   const [showTeam, setShowTeam] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth > 767) {
//       setShowTeam(true);
//     }
//   }, []);

//   const handleContactChange = (event) => {
//     const { name, value } = event.target;
//     setContactFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleContactSubmit = (event) => {
//     event.preventDefault();

//     // Validation logic
//     if (!isValidOrganization(contactFormData.organization)) {
//       alert("Please enter a valid organization.");
//       return;
//     }

//     if (!isValidName(contactFormData.name)) {
//       alert("Please enter a valid name.");
//       return;
//     }

//     if (!isValidComment(contactFormData.comment)) {
//       alert("Please enter a valid comment.");
//       return;
//     }

//     if (!isValidReason(contactFormData.reason)) {
//       alert("Please enter a valid reason.");
//       return;
//     }

//     if (!isValidPhone(contactFormData.phone)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }
//     if (!isValidEmail(contactFormData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // Form submission logic (example: sending an email)
//     const emailSubject = "Contact Form Submission";
//     const emailBody = `Name: ${contactFormData.name}\nPhone: ${contactFormData.phone}\nEmail: ${contactFormData.email}\nConcern: ${contactFormData.concern}`;
//     const emailLink = `mailto:amoyamen44@gmail.com?subject=${encodeURIComponent(
//       emailSubject
//     )}&body=${encodeURIComponent(emailBody)}`;

//     window.location.href = emailLink;

//     // Reset form fields
//     setContactFormData({
//       name: "",
//       email: "",
//       phone: "",
//       organization: "",
//       reason: "",
//       comment: "",
//     });
//   };

//   const isValidName = (name) => {
//     return name.trim() !== "";
//   };

//   const isValidOrganization = (organization) => {
//     return organization.trim() !== "";
//   };

//   const isValidReason = (reason) => {
//     return reason.trim() !== "";
//   };

//   const isValidComment = (comment) => {
//     return comment.trim() !== "";
//   };

//   const isValidPhone = (phone) => {
//     const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
//     return phonePattern.test(phone);
//   };

//   const isValidEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const toggleTeamVisibility = () => {
//     setShowTeam(!showTeam);
//   };

//   return (
//     <>
//       <h1 className="contact-header">Contact Us</h1>
//       <hr className="team-divider" />
//       <h2 className="team-header" onClick={toggleTeamVisibility}>
//         Meet the Team
//       </h2>
//       {showTeam && (
//         <div className="team-container">
//           <TeamMember
//             name="Success Odoemena"
//             role="Chief Executive Officer"
//             image="../photos/Success.jpeg"
//           />
//           <TeamMember
//             name="Kevin M. Torres"
//             role="Chief Financial Officer"
//             image="../photos/Kevin.jpeg"
//           />
//           <TeamMember
//             name="Myles Kelly"
//             role="Chief Strategy Officer"
//             image="../photos/Myles.jpeg"
//           />
//           <TeamMember
//             name="D'Andre Derr"
//             role="Director of Operations"
//             image="../photos/DAndre.jpeg"
//           />
//           <TeamMember
//             name="Aubrey M. Trotter"
//             role="Community Engagement Director"
//             image="../photos/Aubrey.jpeg"
//           />
//         </div>
//       )}
//       <hr className="team-divider" />
//       <h5>
//         Please fill out the form below to get in contact with a member of our team. Typical response
//         is 1 to 3 business days.
//       </h5>
//       <form onSubmit={handleContactSubmit}>
//         <FormGroup
//           label="Name"
//           id="name"
//           name="name"
//           type="text"
//           placeholder="Your Name"
//           value={contactFormData.name}
//           onChange={handleContactChange}
//         />
//         <FormGroup
//           label="Organization"
//           id="organization"
//           name="organization"
//           type="text"
//           placeholder="Organization Name"
//           value={contactFormData.organization}
//           onChange={handleContactChange}
//         />
//         <FormGroup
//           label="Email"
//           id="email"
//           name="email"
//           type="email"
//           placeholder="email@example.com"
//           value={contactFormData.name}
//           onChange={handleContactChange}
//         />
//         <FormGroup
//           label="Phone"
//           id="phone"
//           name="phone"
//           type="tel"
//           placeholder="(000) 000-0000"
//           value={contactFormData.phone}
//           onChange={handleContactChange}
//         />
//         <FormGroup
//           label="Reason"
//           id="reason"
//           name="reason"
//           type="text"
//           placeholder="Reason for contact..."
//           value={contactFormData.reason}
//           onChange={handleContactChange}
//         />
//         <FormGroup
//           label="Comment"
//           id="comment"
//           name="comment"
//           type="text"
//           placeholder="Your comments here..."
//           value={contactFormData.comment}
//           onChange={handleContactChange}
//         />
//         <input type="submit" className="submit" value="Submit" />
//       </form>
//     </>
//   );
// };

// export default Contact;

// import React, { useState, useEffect } from "react"; // Import useEffect here
// import "./Contact.css";
// import TeamMember from "./TeamMember";
// import FormGroup from "./FormGroup";

// const Contact = () => {
//   const [contactFormData, setContactFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     concern: "",
//   });

//   const [showTeam, setShowTeam] = useState(false); // State to track whether to show team members

//   useEffect(() => {
//     // Automatically show team members on screens larger than mobile
//     if (window.innerWidth > 767) {
//       setShowTeam(true);
//     }
//   }, []);

//   const handleContactSubmit = (event) => {
//     event.preventDefault(); // Prevent form submission if validation fails

//     // Validation logic using the isValid functions from the FormGroup component
//     if (!isValidName(contactFormData.name)) {
//       alert("Please enter a valid name.");
//       return;
//     }
//     if (!isValidPhone(contactFormData.phone)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }
//     if (!isValidEmail(contactFormData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // Construct the email link with pre-filled data
//     const emailSubject = "Contact Form Submission";
//     const emailBody = `Name: ${contactFormData.name}\nPhone: ${contactFormData.phone}\nEmail: ${contactFormData.email}\nConcern: ${contactFormData.concern}`;
//     const emailLink = `mailto:amoyamen44@gmail.com?subject=${encodeURIComponent(
//       emailSubject
//     )}&body=${encodeURIComponent(emailBody)}`;

//     // Open the user's default email client
//     window.location.href = emailLink;

//     // Reset the form fields
//     setContactFormData({
//       name: "",
//       phone: "",
//       email: "",
//       concern: "",
//     });
//   };

//   const isValidName = (name) => {
//     return name.trim() !== "";
//   };

//   const isValidPhone = (phone) => {
//     const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
//     return phonePattern.test(phone);
//   };

//   const isValidEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const toggleTeamVisibility = () => {
//     setShowTeam(!showTeam); // Toggle the value of showTeam
//   };

//   return (
//     <>
//       <h1 className="contact-header">Contact Us</h1>
//       <hr className="team-divider" />
//       <h2 className="team-header" onClick={toggleTeamVisibility}>
//         Meet the Team
//       </h2>
//       {showTeam && ( // Display team members only if showTeam is true
//         <div className="team-container">
//           <TeamMember
//             name="Success Odoemena"
//             role="Chief Executive Officer"
//             image="../photos/Success.jpeg"
//           />
//           <TeamMember
//             name="Kevin M. Torres"
//             role="Chief Financial Officer"
//             image="../photos/Kevin.jpeg"
//           />
//           <TeamMember
//             name="Myles Kelly"
//             role="Chief Strategy Officer"
//             image="../photos/Myles.jpeg"
//           />
//           <TeamMember
//             name="D'Andre Derr"
//             role="Director of Operations"
//             image="../photos/DAndre.jpeg"
//           />
//           <TeamMember
//             name="Aubrey M. Trotter"
//             role="Community Engagement Director"
//             image="../photos/Aubrey.jpeg"
//           />
//         </div>
//       )}
//       <hr className="team-divider" />
//       <h5>
//         Please fill out the form below to get in contact with a member of our team. Typical response
//         is 1 to 3 business days.
//       </h5>
//       <form onSubmit={handleContactSubmit}>
//         <FormGroup
//           label="Email"
//           id="email"
//           name="email"
//           type="email"
//           placeholder="email@example.com"
//           value={contactFormData.email}
//           onChange={handleContactChange}
//
//         />
//         <FormGroup
//           label="Organization"
//           id="organization"
//           name="organization"
//           type="text"
//           placeholder="Organization Name"
//           value={contactFormData.name}
//           onChange={handleContactChange}
//
//         />
//         <FormGroup
//           label="Another Field"
//           id="anotherField"
//           name="anotherField"
//           type="text"
//           placeholder="Another Field"
//         />
//         <label className="label" htmlFor="dropdown">
//           Reason:
//         </label>
//         <select id="dropdown" name="reason" >
//           <option value="" disabled selected>
//             Select an option
//           </option>
//           <option value="get involved">Get Involved</option>
//           <option value="review/testimonial">Review/Testimonial</option>
//           <option value="question/concern">Question/Concern</option>
//         </select>
//         <FormGroup
//           label="Additional Comments"
//           id="description"
//           name="description"
//           type="textarea"
//           placeholder="Type any additional comments, questions, or concerns here..."
//         />
//         <input type="submit" className="submit" value="Submit" />
//       </form>
//     </>
//   );
// };

// export default Contact;
