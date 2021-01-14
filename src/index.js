import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Components/Portfolio';
import { ReactReduxContext } from 'react-redux';
import { createStore } from 'redux';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);  

//reportWebVitals();
