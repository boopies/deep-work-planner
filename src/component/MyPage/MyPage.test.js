import React from 'react';
import ReactDOM from 'react-dom';
import MyPage from './MyPage'
import {BrowserRouter} from "react-router-dom";


describe('Landing Page Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter><MyPage/></BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });