import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
	
	//Using Redux dev tools instead of return createStore(reducer);
	
	return createStore(
		rootReducer,
		compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
	);
}