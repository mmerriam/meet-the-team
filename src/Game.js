import React from 'react';
import data from './data.json';
import { generateQuestions } from './game-helper';
import Question from './Question';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numWrong: 0,
      numRight: 0
    };
  }

  wrong = () => {
    this.setState((state, props) => ({
      numWrong: state.numWrong + 1
    }));
  }

  right = () => {
    this.setState((state, props) => ({
      numRight: state.numWrong + 1
    }));
  }

  render() { 
    let questions = generateQuestions(data.people);
    return <div>
      <h2>Right: {this.state.numRight}, Wrong: {this.state.numWrong} </h2>
      <Question question={questions[0]} wrong={this.wrong} right={this.right}></Question>
    </div>;
  }
}