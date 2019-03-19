import React from 'react';
import Participant from './Participant.js';

function List(props){
  const list = props.participants.map(p => <Participant key={p.id} name={p.name} avatar={p.avatar} inSession={p.inSession} onStage={p.onStage} />);
  return (
    <section className="List">
      {list}
    </section>
  )
}

export default List;