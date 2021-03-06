import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import participants from './participants.js';
import renderer from 'react-test-renderer';

describe('<App />', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App part={participants}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('render the UI as expected', ()=>{
    const tree = renderer
      .create(<App part={participants}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});