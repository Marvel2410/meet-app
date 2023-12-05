import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('Event Component', () => {
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  test('renders event title', () => {
    const { queryByText } = render(<Event event={allEvents[0]} />);
    const title = queryByText(allEvents[0].summary);
    expect(title).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const { queryByText } = render(<Event event={allEvents[0]} />);
    const time = queryByText(allEvents[0].created);
    expect(time).toBeInTheDocument();
  });

  test('renders event location', () => {
    const { queryByText } = render(<Event event={allEvents[0]} />);
    const location = queryByText(allEvents[0].location);
    expect(location).toBeInTheDocument();
  });

  test('renders event details button with "Show Details"', () => {
    const { queryByText } = render(<Event event={allEvents[0]} />);
    const detailsButton = queryByText('Show Details');
    expect(detailsButton).toBeInTheDocument();
  });

  test('renders event details after button click', () => {
    const { getByText, container } = render(<Event event={allEvents[0]} />);
    const button = getByText('Show Details');
    fireEvent.click(button);

    const eventDetails = container.querySelector('.details');
    expect(eventDetails).toBeInTheDocument();
  });

  test('by default, event details section should be hidden', () => {
    const { container } = render(<Event event={allEvents[0]} />);
    const eventDetails = container.querySelector('.details');
    expect(eventDetails).toBeNull();
  });

  test('shows the details section when the user clicks on the "show details" button', async () => {
    const { getByText, container } = render(<Event event={allEvents[0]} />);
    const button = getByText('Show Details');
    fireEvent.click(button);

    const eventDetails = container.querySelector('.details');
    expect(eventDetails).toBeInTheDocument();
  });

  test('hides the details section when the user clicks on the "hide details" button', async () => {
    const { getByText, container } = render(<Event event={allEvents[0]} />);
    const button = getByText('Show Details');
    fireEvent.click(button);

    const hideButton = getByText('Hide Details');
    fireEvent.click(hideButton);

    const eventDetails = container.querySelector('.details');
    expect(eventDetails).toBeNull();
  });
});


