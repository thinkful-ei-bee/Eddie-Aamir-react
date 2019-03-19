import React from 'react';
import participants from './participants.js';

function Message(props){
  let element = <div></div>;
  const user = participants.find(p => p.id === props.participantId);
  if (props.type==="message"){
    const time = new Date(props.timestamp);
    element = (
    <div>
      <img src={user.avatar}/>
      <p>{user.name}</p>
      <p>{time.toString()}</p>
      <p>{props.message}</p>
    </div>);
  }
  if (props.type==="thumbs-up"){
    element = <p>{user.name} gave a thumbs-up</p>;
  }
  if (props.type==="thumbs-down"){
    element = <p>{user.name} gave a thumbs-down</p>;
  }
  if (props.type==="clap"){
    element = <p>{user.name} clapped</p>;
  }
  if (props.type==="raise-hand"){
    element = <p>{user.name} raised their hand</p>;
  }
  if (props.type==="join"){
    element = <p>{user.name} joined</p>;
  }
  if (props.type==="leave"){
    element = <p>{user.name} left</p>;
  }
  if (props.type==="join-stage"){
    element = <p>{user.name} joined the stage</p>;
  }
  if (props.type==="leave-stage"){
    element = <p>{user.name} left the stage</p>;
  }

  return (
    <div className='Message'>
      {element}
    </div>
  )
}

export default Message;