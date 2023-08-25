// css
import "./schedule.css";
import axios from 'axios';

// from react-big-calendar package
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
// import DatePicker from "react-date-picker";

// icons
// import { FaCheck } from "react-icons/fa";
// import { FaTrashAlt } from "react-icons/fa";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});



 const events = [
   {     title: "Financial Literacy 101",

     allDay: true,
     start: new Date(2023, 8, 0),
     end: new Date(2023, 8, 0),
     description:
       "This interactive class empowers participants with essential financial skills. Covering topics like budgeting, saving, investing, and debt management, learners gain practical insights to make informed financial decisions. Engaging discussions, real-world scenarios, and expert insights form the foundation of this course. Navigate personal finances with confidence, build a strong financial future, and achieve goals through actionable strategies. Whether you're new to finance or seeking to refine your skills, this class equips you with the knowledge and tools needed to thrive in a complex financial landscape. Unlock financial freedom and seize control of your economic well-being.",
   },
   {
     title: "Affordable Housing Essentials",
     start: new Date(2023, 8, 2),
     end: new Date(2023, 8, 2),
     description:
       "Delve into the dynamics of accessible housing in our comprehensive class. Explore housing policies, market trends, and socio-economic factors influencing affordability. Gain insights into government initiatives, urban planning, and innovative solutions that address housing challenges. Through case studies and discussions, understand the significance of stable housing for communities and individuals. Acquire tools to advocate for affordable housing, assess housing options, and navigate housing programs. Whether you're an advocate, policy maker, or seeking affordable housing, this course equips you with the knowledge to promote equitable housing opportunities and make informed decisions. Empower change and contribute to housing accessibility.",
   },
   {
     title: "Mastering Investing Strategies",

     start: new Date(2023, 8, 1),
     end: new Date(2023, 8, 1),
     description:
       "Unveil the art and science of investing in this comprehensive course. Dive into fundamental concepts like stocks, bonds, mutual funds, and diversification. Explore advanced topics including portfolio management, risk assessment, and market analysis. Through hands-on simulations, real-time market insights, and expert guidance, participants develop a solid foundation in investment strategies. Whether you're a novice or experienced investor, learn to identify opportunities, manage risks, and optimize returns. From building personal wealth to achieving financial goals, this class empowers you to navigate the complex world of investments with confidence and make informed decisions. Unlock your potential in the global financial arena.",
   },
 ];



const Mainschedule = () => {
  const [event, setEvent] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // const [newEvent] = useState({ title: "", start: "", end: "", description: "" });
  const [allEvents] = useState(events);

  const [isClosingModal, setIsClosingModal] = useState(false);

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }

  // function handleEventClick(event) {
  //   setSelectedEvent(event);
  //   setIsModalOpen(true);
  // }

  const [isSignedUp, setIsSignedUp] = useState(false);

  function handleAddClass() {
    setIsSignedUp(true);
  }

  const [isDropped, setIsDropped] = useState(false);

  function handleDropClass() {
    setIsDropped(true);
  }


 

  useEffect(() => {

    fetch('http://localhost:3500/schedule')

      .then((response) => response.json())

      .then((data) => {
          console.log(data)
        // Set products and filtered products
        setEvent(data);

      })

      .catch((error) => {

        console.error("Error fetching products: ", error);

      });

  }, []); // Re-run effect if productsApi changes


  useEffect(() => {
    if (isClosingModal) {
      // Reload the page when the modal is closed
      window.location.reload();
    }
  }, [isClosingModal]);

  function handleEventClick(event) {
    setSelectedEvent(event);
    setIsModalOpen(true);
  }



  return (
    <div>
      <div className={isModalOpen ? "hide-dates" : ""}>
        <div className={isModalOpen ? "hide-calendar-content" : ""}>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
            onSelectEvent={handleEventClick} // Call the handleEventClick function on event click
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsClosingModal(true); // Set the flag when the modal is closing
          setIsModalOpen(false);
        }}
        contentLabel="Event Details"
        style={{
          content: {
            width: "400px",
            maxHeight: "70%",
            margin: "auto",
          },
        }}
      >
        {selectedEvent && (
          <div>
            <h2>{selectedEvent.title}</h2>
            <p>Start: {selectedEvent.start.toString()}</p>
            <p>End: {selectedEvent.end.toString()}</p>
            <h2>Course Description</h2>
            <p>{selectedEvent.description.toString()}</p>

            {!isSignedUp ? (
              <button onClick={handleAddClass}>Add Class</button>
            ) : (
              <div className="signed-up">
                <p>
                  {" "}
                  {/* <FaCheck className="icon" /> */}
                </p>
                <h2>You Are Signed Up To Volunteer For: {selectedEvent.title}!</h2>
              </div>
            )}

            <p></p>

            {!isDropped ? (
              <button onClick={handleDropClass}>Drop Class</button>
            ) : (
              <div className="dropped-class">
                <p>
                  {" "}
                  {/* <FaTrashAlt className="drop-icon" /> */}
                </p>
                <h2>You Have Dropped: {selectedEvent.title}!</h2>
              </div>
            )}

            <p></p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Mainschedule;
