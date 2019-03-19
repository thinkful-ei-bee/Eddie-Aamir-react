import React from 'react';
import Participant from './Participant.js';

function Stage(props){
  // props = {}
  // props.stage = [{onStage:true...},{onStage:true..} ] only has participants with onStage === true
  const list = props.stage.map(p => <Participant key={p.id }name={p.name} avatar={p.avatar} onStage={p.onStage} inSession={p.inSession}/>)
  return(
    <section className="Stage">
    <h2>Stage</h2>
      {list}
    </section>
  )
};

export default Stage;