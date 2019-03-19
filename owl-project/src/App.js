import React from 'react';
import List from './List.js';
import Stage from './Stage.js';
import './App.css';

function App(props){
  const stageParticipants = props.part.filter(p => p.onStage === true);

  return(
    <main className='App'>
      <div className="Participant-list">
        <List participants={props.part}/>
      </div>
      <div className="Participant-Stage">
        <Stage stage={stageParticipants} />
      </div>
    </main>
  )
}

export default App;
