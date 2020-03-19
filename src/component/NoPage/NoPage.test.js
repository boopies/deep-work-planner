import React from 'react';
import ReactDOM from 'react-dom';
import NoPage from './NoPage'
import {BrowserRouter} from "react-router-dom";


describe('Landing Page Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><NoPage/></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });