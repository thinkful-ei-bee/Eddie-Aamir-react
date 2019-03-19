import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.js';
import participants from './participants.js';
import renderer from 'react-test-renderer';

const filteredList = participants.filter(p => p.onStage===true);

describe('<Stage />', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage stage={filteredList}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('render the UI as expected', ()=>{
    const tree = renderer
      .create(<Stage stage={filteredList}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});