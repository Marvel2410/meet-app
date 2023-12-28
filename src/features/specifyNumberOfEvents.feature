Feature: Specify Number of Events

  Scenario: Display default number of events, default is 32
    Given the user hasn't specified a number of events
    When the user views the event list
    Then it will display 32 events at a time as the default

  Scenario: Changing number of events
    Given the user intends to adjust the diplayed number of events
    When they input a new number into the field
    Then the event list will refresh to exhibit newly specified number of events

