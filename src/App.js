import React, { useState } from 'react';
import './App.css';
import Game from './Game';
import StudyGuide from './StudyGuide';

function App() {
  const [playGame, setPlayGame] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Meet the Team!</h1>
      </header>

      {playGame &&
        <div>
          <Game></Game>
          <div style={{marginTop: '30px'}}>
            <button style={{fontSize: '20px'}} onClick={() => { setPlayGame(false);}}>Study Guide</button>
          </div>
        </div>
      }
      {!playGame &&
        <div>
          <button onClick={() => { setPlayGame(true);}}>Back to Game</button>
          <h2>But first, let's study!</h2>
          <StudyGuide></StudyGuide>
        </div>
      }
    </div>
  );
}

export default App;
