import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from '../App'
//Import Page components
import GistPage from '../GistPage'
import DressCodePage from '../DressCodePage'
import SignUpPage from '../SignUpPage'
import SchedulePage from '../SchedulePage'
import NotFound from '../NotFound'

const Routes = (props) => (
	<Router {...props} history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
		<Route component={App}>
			<Route path="/" component={GistPage} page="gist"/>
			<Route path="dresscode" component={DressCodePage} />
			<Route path="signup" component={SignUpPage} />
			<Route path="schedule" component={SchedulePage} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
)

export default Routes