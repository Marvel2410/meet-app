// src/components/Event.js

import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button
        className="details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>Description: {event.description}</p>
          {/* Add other event details here */}
        </div>
      ) : null}
    </li>
  );
};

export default Event;