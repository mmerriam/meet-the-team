import React from 'react';

export default function Question(props) {

    return <div>
        <h2>{props.question.questionText}</h2>
        <img alt="pic1" src="images/pic1.jpg" height="300"></img>
        <img alt="pic2" src="images/pic2.jpg" height="300"></img>
        <img alt="pic3" src="images/pic3.jpg" height="300"></img>
      </div>;
}