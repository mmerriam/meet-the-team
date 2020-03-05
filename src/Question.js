import React from 'react';
import styled from 'styled-components';
import ImageButton from './ImageButton';

export default function Question(props) {

  const checkAnswer = (guess) => {
    let correctAnswer = props.question.person;
    if (guess === correctAnswer) {
      props.right();
    } else {
      props.wrong();
    }
  };
 

  const getPeople = () => {
    return props.question.people.map((person, idx) => {
      return <Wrapper key={idx}>
        <ImageButton
          onClick={() => checkAnswer(person)}
          alt={'photo of ' + person.firstName + ' ' + person.lastName}
          src={person.image}>
        </ImageButton>
      </Wrapper>
    });
  }

  return <div>
    <h2>{props.question.questionText}</h2>
    {getPeople()}
  </div>;
}

const Wrapper = styled.span`
  padding: 0 20px;

  @media (max-width:480px)  { /* smartphones, Android phones, landscape iPhone */ 
    padding: 0 5px;
  }
`;