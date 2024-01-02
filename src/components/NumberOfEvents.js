// src/components/NumberOfEvents.js


const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
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
    <div id="number-of-events">
      <input
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};


export default NumberOfEvents;