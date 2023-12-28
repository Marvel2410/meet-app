Feature: Show and hide events details

  Scenario: Event Element Collapsed by Default
    Given the user has selected a location to search for events
    When the list of local events for that location loads
    Then the event elements will collapse

  Scenario: User can expand an event to see details
    Given the list of events is displayed
    When a user selects an events details
    Then the event details will be displayed

  Scenario: User can collapse an event to hide details
    Given the user has all the information they need about an event
    When the user chooses to change the number of events displayed
    Then the event details will be hidden

