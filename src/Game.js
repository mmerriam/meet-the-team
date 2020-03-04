import React, { useState } from 'react';
import data from './data.json';
import { generateQuestions } from './game-helper';
import Question from './Question';
import IncorrectImage from './IncorrectImage';

export default function Game(props) {

  const questions = generateQuestions(data.people);
  const [numWrong, setNumWrong] = useState(0);
  const [numRight, setNumRight] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [question, setQuestion] = useState(questions[0]);

  const wrong = () => {
    setNumWrong(numWrong + 1);
    setWrongAnswer(true);

    setTimeout(() => {
      setWrongAnswer(false);
      nextQuestion();
    }, 3000);
  }

  const right = () => {
    setNumRight(numRight + 1);
    nextQuestion();
  }

  const nextQuestion = () => {
    let nextIdx = questionIdx + 1; // this feels like a hack
    setQuestionIdx(nextIdx);
    setQuestion(questions[nextIdx]);
  }

  if (wrongAnswer) {
    return <IncorrectImage></IncorrectImage>
  }

  return <div>
    {questionIdx <= 4 &&
      <div>
        <h2>Right: {numRight}, Wrong: {numWrong} </h2>
        <Question question={question} wrong={wrong} right={right}></Question>
      </div>
    }
    {questionIdx === 5 &&
      <div>
        <h1>You're done!</h1>
        <h2>You managed to get {numRight} out of 5 correct!</h2>
        <p>Thanks for playing</p>
        <br/>
        <button onClick={() => { window.location.reload(); }}>Play again</button>
      </div>
    }
  </div>;

}