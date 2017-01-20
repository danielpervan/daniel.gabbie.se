import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.scss';
import { browserHistory } from 'react-router'

window.$ = window.jQuery = require("jquery")
require('foundation-sites')

ReactDOM.render(
  <Routes history={browserHistory}/>,
  document.getElementById('root')
);
