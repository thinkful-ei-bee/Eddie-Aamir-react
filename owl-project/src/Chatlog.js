import React from 'react';
import Message from './Message.js';
 
function Chatlog(props){
  //props.events = [{...,...}, {},{}]
  const list = props.events.map((m,index) => <Message key={index} participantId={m.participantId} type={m.type} message={m.message} time={m.time} timestamp={m.timestamp} />);
   return (
     <div className="Chatlog">
      <h2>Chat</h2>
      {list}
     </div>
   )
 }

 export default Chatlog;