import React from 'react';
import data from './data.json';
import { generateQuestions } from './game-helper';
import Question from './Question';

export default function Game(props) {

  let questions = generateQuestions(data.people);
  let question = questions[0];

  return <div>
    <Question question={question}></Question>
    </div>;
}