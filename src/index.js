import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from './Context/DataContext';

const rootEle = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>,
  rootEle
);  
