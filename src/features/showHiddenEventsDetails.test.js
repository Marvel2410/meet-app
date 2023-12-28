import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHiddenEventsDetails.feature');

defineFeature(feature, (test) => {
  //SCENARIO 1
  test('Event Element Collapsed by Default', ({ given, when, then }) => {
    let AppComponent;
    given('the user has selected a location to search for events', () => {
      AppComponent = render(<App />);
    });

    when(
      "the list of local events for that location loads",
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');

        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(32);
        });
      }
    );

    then('the event elements will collapse', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

  // SCENARIO 2
  test('User can expand an event to see details', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given('the list of events is displayed', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("a user selects an events details", async () => {
      const button = AppComponent.queryAllByText('Show Details')[0];

      await userEvent.click(button);
    });

    then('the event details will be displayed', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });
  });

  // SCENARIO 3
  test('User can collapse an event to hide details', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given('the user has all the information they need about an event', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });

      button = AppComponent.queryAllByText('Show Details')[0];
      await userEvent.click(button);

      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });

    when("the user chooses to change the number of events displayed", async () => {
      await userEvent.click(button);
    });

    then('the event details will be hidden', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });
});