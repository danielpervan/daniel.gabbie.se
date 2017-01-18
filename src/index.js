import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';
import { browserHistory } from 'react-router'

window.$ = window.jQuery = require("jquery")
require('foundation-sites/dist/js/foundation.min.js')
require('foundation-sites/dist/css/foundation.min.css')

ReactDOM.render(
  <Routes history={browserHistory}/>,
  document.getElementById('root')
);
