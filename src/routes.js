import React from 'react'
import { Router, Route } from 'react-router'

//Import Page components
import GistPage from './components/GistPage'
import DressCodePage from './components/DressCodePage'
import NotFound from './components/NotFound'

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={GistPage} />
		<Route path="dresscode" component={DressCodePage} />
		<Route path="*" component={NotFound} />
	</Router>
)

export default Routes