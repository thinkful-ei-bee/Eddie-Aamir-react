import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';
import participants from './participants.js';

describe('<List />', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List participants={participants}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render the UI as expected', ()=>{
    const tree = renderer
      .create(<List participants={participants}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});
