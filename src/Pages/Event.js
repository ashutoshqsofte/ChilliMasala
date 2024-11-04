import React from 'react';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown">
      <div className="time-box">{days} <span>Days</span></div>
      <div className="time-box">{hours} <span>Hours</span></div>
      <div className="time-box">{minutes} <span>Minutes</span></div>
      <div className="time-box">{seconds} <span>Seconds</span></div>
    </div>
  );
};

const Event = () => {
  const eventDate = new Date('December 31, 2024 23:59:59');

  return (
    <div className="event-page">
      <section className="upcoming-event">
        <h2 className='Coming-Event'>Up Coming Event</h2>
        <div className="event-details">
          <div className="event-info">
            <h3 className='head'> CAPODANNO ITALIANO</h3>
            <p className='para'> A Culinary Countdown To The New Year!</p>
            <Countdown date={eventDate} renderer={renderer} />
            <button className="reserve-button">RESERVE NOW</button>
          </div>
        </div>
      </section>

      <section className="events">
        <h2>Events</h2>
        <div className="event-cards">
          <div className="event-card event-card1 ">
            <h3>Corporate & Private Events</h3>
          </div>
          <div className="event-card event-card2">
            <h3>Wedding Parties</h3>
          </div>
          <div className="event-card event-card3">
            <h3>Birthday Parties</h3>
          </div>
        </div>
      </section>

      <section className="venue-features">
        <h2>Top 3 Event Venue Features</h2>
        <ul>
          <li>Complimentary car park available</li>
          <li>Choice of indoor and outdoor venues</li>
          <li>Complete furniture and table set-up</li>
        </ul>
      </section>
    </div>
  );
};

export default Event;
