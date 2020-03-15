import React from 'react';
import {fireEvent, render, cleanup} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('show a link to the Study Guide', () => {
  const { queryByText } = render(<App />);

  expect(queryByText('Study Guide')).toBeInTheDocument();
  expect(queryByText('Back to Game')).not.toBeInTheDocument();
});

it('show a link Back to the Game after clicking the Study Guide', () => {
  const { queryByText } = render(<App />);
  fireEvent.click(queryByText('Study Guide'));

  expect(queryByText('Back to Game')).toBeInTheDocument();
  expect(queryByText('Study Guide')).not.toBeInTheDocument();
});