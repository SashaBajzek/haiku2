import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadHaikus} from './actions/haikuActions';
import {loadModal} from './actions/modalActions';
import './stylesheets/style.scss';

const store = configureStore();

store.dispatch(loadHaikus());
store.dispatch(loadModal());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);



