import React from 'react';

function Participant(props){
  let session = 'left session';
  if (props.inSession){
    if (props.onStage){
      session = 'on stage';
    }else{
      session = 'in session';
    }
  }

  return (
    <div className='Participant'>
      <img src={props.avatar} alt="avatar for user"/>
      <h3>{props.name}</h3>
      <p>{session}</p>
    </div>
  )
}

export default Participant;