import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
1. ReactDOM.render method is used to render the App component into the DOM element with the ID root.

2. <React.StrictMode> is a wrapper that helps with identifying potential problems in the application. 
It activates additional checks and warnings for its descendants. */
ReactDOM.render(
  <React.StrictMode>       
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)