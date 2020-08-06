import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/styles.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
