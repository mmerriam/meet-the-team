import React from 'react';
import * as random from 'lodash.random';

export default class IncorrectImage extends React.Component {

  render() {
    return <div>
      <img style={{marginTop: "40px"}} 
        alt="wrong meme" 
        src={`images/wrong-answer/wrong${random(1, 9)}.jpg`}
        height="250" ></img>
    </div>;
  }
}