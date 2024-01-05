// src/components/NumberOfEvents.js
import React from 'react';
import { ErrorAlert } from './Alert';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert, errorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    let errorText = '';

    if (isNaN(value) || value <= 0) {
      errorText = 'Please enter a valid number greater than zero';
    }

    setErrorAlert(errorText);
    setCurrentNOE(value);
  };



  return (
    <div id="number-of-events" className="numberOfEvents">
      <input
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
      {errorAlert && (
        <ErrorAlert text={errorAlert} />
      )}
    </div>
  );
};


export default NumberOfEvents;