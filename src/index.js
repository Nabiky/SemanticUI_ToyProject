/*
  eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
  no-undef, jsx-a11y/label-has-for, react/jsx-first-prop-new-line
*/
import React from 'react';
import ReactDOM from 'react-dom';
import TimersDashboard from './TimersDashboard';
 //import './style.css';
import helpers from './helpers';
import client from './client';

ReactDOM.render(
  <TimersDashboard />,
  document.getElementById('content')
);
