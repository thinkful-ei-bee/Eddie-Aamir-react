import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';

describe('<List />', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header={'Test Header'} cards={[{title:'Test Title',content:'Test Content'}]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
