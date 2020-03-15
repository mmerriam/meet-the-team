import React from 'react';
import {render, cleanup} from '@testing-library/react';
import ImageButton from './ImageButton';

afterEach(cleanup);

it('should have alt text passed in', () => {
  const { getByAltText } = render(<ImageButton alt="my alt"/>);
  expect(getByAltText('my alt')).toBeInTheDocument();
});

it('should have alt text of the wrong meme', () => {
  const { getByAltText } = render(<ImageButton wrongAnswer="true"/>);
  expect(getByAltText('wrong meme')).toBeInTheDocument();
});