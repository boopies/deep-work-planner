import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationPage from './RegistrationPAge'
import {BrowserRouter} from "react-router-dom";


describe('Registration Page Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><RegistrationPage /></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });