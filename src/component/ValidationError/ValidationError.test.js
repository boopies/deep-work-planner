import React from 'react';
import ReactDOM from 'react-dom';
import ValidationError from './ValidationError'

describe('Edit Activities Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ValidationError />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });