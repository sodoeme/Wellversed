import React from 'react';
// import '../css/user.css';
import '../css/schedule.css';
import Mainschedule from '../components/mainschedule'

const schedule = () => {
  return (
    <div className='User-Page'>
      <div className='Header'>
        <h1>Well-Ver$ed Education</h1>
      </div>

      <section className='hero-image'></section>

      <section className='volunteer-schedule'>
        <h2>Open Volunteer Opportunities</h2>
      </section>

      <section className='schedule'>

        
<Mainschedule />

      </section>
    </div>
  )
}

export default schedule;
