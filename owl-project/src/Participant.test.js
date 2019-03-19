import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant.js';
import renderer from 'react-test-renderer';

describe('<Participant />',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant avatar={''} name={'Test name'} inSession={true} onStage={true}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render the UI as expected', ()=>{
    const tree = renderer
      .create(<Participant avatar={''} name={'Test name'} inSession={true} onStage={true}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});