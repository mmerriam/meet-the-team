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
      return <span key={idx} style={{padding: "0 20px"}}>
        <Button onClick={() => checkAnswer(person)}>
          <Picture alt={'photo of ' + person.firstName + ' ' + person.lastName}
            src={person.image}></Picture>
        </Button>
      </span>
    });
  }

  return <div>
    <h2>{props.question.questionText}</h2>
    {getPeople()}
  </div>;
}

const Button = styled.button`
  cursor: pointer;
  padding: 0;
`;

const Picture = styled.img`
  height: 250px;
`;