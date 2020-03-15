import React from 'react';
import styled from 'styled-components'
import random from 'lodash.random';

export default function IncorrectImage(props) {
  return <Image
      alt="wrong meme"
      src={`images/wrong-answer/wrong${random(1, 9)}.jpg`}
      height="250" ></Image>;
}

const Image = styled.img`
  height: 250px;
  padding-top: 40px;
  border: 10px solid red;
`;
