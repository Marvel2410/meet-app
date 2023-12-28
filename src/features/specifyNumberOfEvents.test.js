import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppComponent;

  // SCENARIO 1
  test('Display default number of events, default is 32', ({ given, when, then }) => {
    let eventList;

    given('the user hasn\'t specified a number of events', () => {
      AppComponent = render(<App />);
    });

    when('the user views the event list', async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    then('it will display 32 events at a time as the default', () => {
      expect(eventList.length).toEqual(32);
    });
  });

  // SCENARIO 2
  test('Changing number of events', ({ given, when, then }) => {

    given('the user intends to adjust the diplayed number of events', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    when('they input a new number into the field', async () => {
      const button = AppComponent.queryByTestId('numberOfEventsInput');
      await userEvent.type(button, '{backspace}{backspace}10');
    });

    then(
      'the event list will refresh to exhibit newly specified number of events', () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList.length).toEqual(10);
      }
    );
  });
});