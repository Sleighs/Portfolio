import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio';
//import { ReactReduxContext } from 'react-redux';
//import { createStore } from 'redux';
/*import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyDHE9fVBUM_mto-p_SkWnyKtOiRu8M5F98",
  authDomain: "react-firebase-farazamiruddin.firebaseapp.com",
  databaseURL: "https://react-firebase-farazamiruddin.firebaseio.com",
  projectId: "react-firebase-farazamiruddin",
  storageBucket: "react-firebase-farazamiruddin.appspot.com",
  messagingSenderId: "338564911587",
  appId: "1:338564911587:web:c34e6fee0ff41bbe7fd0d6"
});*/

const rootEle = document.getElementById('root');
ReactDOM.render(
    <Portfolio />,
  rootEle
);  

