import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import OneArray from './OneArray';
import VotingApp from './VotingApp';
import Todos from './Todos';
import Routing from './Routing';

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

