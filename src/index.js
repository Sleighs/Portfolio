import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from './Context/DataContext';
import { ThemeContextProvider } from './Context/ThemeContext';

const rootEle = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <DataContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </DataContextProvider>
  </BrowserRouter>,
  rootEle
);  
