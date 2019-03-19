import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import STORE from './store.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={STORE}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
