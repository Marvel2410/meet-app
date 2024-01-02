// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';


describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />
    );
  });

  test('renders number of events text input', () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('default number is 32', async () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toHaveValue('32');
  });

  test('number of events text box value changes when the user types in it', async () => {
    const input = NumberOfEventsComponent.queryByRole('textbox');
    await userEvent.type(input, '{backspace}{backspace}10');
    expect(input).toHaveValue('10');
  });
});

