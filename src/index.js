import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNpgkVjRA9CRdaELPgdQC5v3ddkP_uUE",
  authDomain: "meme-gene-tab.firebaseapp.com",
  projectId: "meme-gene-tab",
  storageBucket: "meme-gene-tab.appspot.com",
  messagingSenderId: "225967233562",
  appId: "1:225967233562:web:d915e549fbf7d81c11cfa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
