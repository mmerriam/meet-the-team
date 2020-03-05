import React from 'react';
import styled from 'styled-components'

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
        <Button onClick={() => checkAnswer(person)}>
          <Picture alt={'photo of ' + person.firstName + ' ' + person.lastName}
            src={person.image}></Picture>
        </Button>
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

const Button = styled.button`
  -webkit-appearance: none; /* iOS Safari fix https://stackoverflow.com/q/12450776/1691 */
  cursor: pointer;
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