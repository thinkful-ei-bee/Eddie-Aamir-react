import React, { Component } from 'react';
import List from './List.js';
import './App.css';

function App(props){
  return(
    <main className='App'>
      <div className="Participant-list">
        <List participants={props.participants}/>
      </div>
    </main>
  )
}

export default App;
