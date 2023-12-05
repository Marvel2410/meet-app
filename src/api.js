// src/api.js

import mockData from './mock-data';

/**
 *
 * @param {*} events:

 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
  return mockData;
};
