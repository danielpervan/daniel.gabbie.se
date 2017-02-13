import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import Routes from './components/Routes'

window.$ = window.jQuery = require("jquery")
require('foundation-sites')

ReactDOM.render(
	<Routes/>,
	document.getElementById('root')
);
