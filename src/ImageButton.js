import React from 'react';
import styled from 'styled-components'
import IncorrectImage from './IncorrectImage';

export default function ImageButton(props) {
  if (props.wrongAnswer) {
    return <Button onClick={props.onClick}>
      <IncorrectImage></IncorrectImage>
    </Button>;
  } else {
    return <Button onClick={props.onClick}>
      <Picture alt={props.alt}
        src={props.src}></Picture>
    </Button>;
  }
}

const Button = styled.button`
  -webkit-appearance: none; /* iOS Safari fix https://stackoverflow.com/q/12450776/1691 */
  cursor: pointer;
  border: 0;
  padding: 0;
`;

const Picture = styled.img`
  height: 250px;

  @media (max-width:768px)  {
    height: 180px;
  }

  @media (max-width:480px)  {
    height: 110px;
  }

`;