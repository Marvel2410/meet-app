// src/components/NumberOfEvents.js


const NumberOfEvents = ({ setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value > 0 && value <= 50) {
      setCurrentNOE(value);
    }

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