import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('renders input field for number of events', () => {
    const { getByRole } = render(<NumberOfEvents />);
    const inputElement = getByRole('spinbutton');
    expect(inputElement).toBeInTheDocument();
  });

  test('default value of input field is 32', () => {
    const { getByRole } = render(<NumberOfEvents />);
    const inputElement = getByRole('spinbutton');
    expect(inputElement).toHaveValue(32);
  });

  test('input value changes when typed in', async () => {
    const { getByRole } = render(<NumberOfEvents />);
    const inputElement = getByRole('spinbutton');
    expect(inputElement).toHaveValue(32);
    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, '10');
    expect(inputElement).toHaveValue(10);
  });
});
