import React from 'react';
import data from './data.json';
import { generateQuestions } from './game-helper';
import Question from './Question';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.questions = generateQuestions(data.people);
    this.state = {
      numWrong: 0,
      numRight: 0,
      questionIdx: 0,
      question: this.questions[0]
    };
  }

  wrong = () => {
    this.setState((state, props) => ({
      numWrong: state.numWrong + 1
    }));
    this.nextQuestion();
  }

  right = () => {
    this.setState((state, props) => ({
      numRight: state.numWrong + 1
    }));
    this.nextQuestion();
  }

  nextQuestion = () => {
    this.setState((state, props) => {
      let next = state.questionIdx + 1;
      return {
        questionIdx: next,
        question: this.questions[next]
      }
    });
  }

  render() { 
    return <div>
      <h2>Right: {this.state.numRight}, Wrong: {this.state.numWrong} </h2>
      <Question question={this.state.question} wrong={this.wrong} right={this.right}></Question>
    </div>;
  }
}