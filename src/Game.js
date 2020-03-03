import React from 'react';
import data from './data.json';
import { generateQuestions } from './game-helper';
import Question from './Question';
import IncorrectImage from './IncorrectImage';

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
      numWrong: state.numWrong + 1,
      wrongAnswer: true
    }));

    setTimeout(() => {
      this.setState({wrongAnswer: false});
      this.nextQuestion();
    }, 3000);
  }

  right = () => {
    this.setState((state, props) => ({
      numRight: state.numRight + 1
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
    if (this.state.wrongAnswer) {
      return <IncorrectImage></IncorrectImage>
    } 

    return <div>
      {this.state.questionIdx <= 4 &&
        <div>
          <h2>Right: {this.state.numRight}, Wrong: {this.state.numWrong} </h2>
          <Question question={this.state.question} wrong={this.wrong} right={this.right}></Question>
        </div>
      }
      {this.state.questionIdx === 5 &&
        <div>
          <h1>You're done!</h1>
          <h2>You managed to get {this.state.numRight} out of 5 correct!</h2>
          <p>Thanks for playing</p>
        </div>
      }
    </div>;
  }
}