import React from 'react';
import { Route, Router } from 'react-router';
import {HaikuAppContainer} from './containers/HaikuAppContainer';
import {AdminContainer} from './containers/AdminContainer';

export default (
	<Router >
		<Route path="/" component={HaikuAppContainer} />
		<Route path="/admin" component={AdminContainer} />
	</Router>
);
