import React from 'react';
import {render, cleanup} from '@testing-library/react';
import IncorrectImage from './IncorrectImage';

afterEach(cleanup);

it('should have alt text', () => {
  const { getByAltText } = render(<IncorrectImage />);
  expect(getByAltText('wrong meme')).not.toBeNull();
});

it('should have a src path to a wrong image', () => {
  const { getByAltText } = render(<IncorrectImage />);
  expect(getByAltText('wrong meme')).toHaveAttribute('src', expect.stringMatching(/images\/wrong-answer\/wrong\d+\.jpg/));
});