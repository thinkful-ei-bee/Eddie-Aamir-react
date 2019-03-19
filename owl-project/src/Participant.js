import React from 'react';

function Participant(props){
  return (
    <div className='Participant'>
      <img src={props.avatar} alt="avatar for user"/>
      <h3>{props.name}</h3>
      <p>{props.inSession}</p>
      <p>{props.onStage}</p>
    </div>
  )
}

export default Participant;