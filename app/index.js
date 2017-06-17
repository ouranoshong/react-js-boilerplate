/**
 * App entry point
 */

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
// Base styling
import './index.css';

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render(( <App /> ), document.getElementById(DOM_APP_EL_ID));