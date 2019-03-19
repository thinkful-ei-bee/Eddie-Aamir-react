import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import './List.css';
import './Participant.css';
import './App.css';
import participants from './participants.js';
import chatEvents from './chatEvents.js';

ReactDOM.render(<App log={chatEvents} part={participants}/>, document.getElementById('root'));
