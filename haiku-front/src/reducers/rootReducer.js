import {combineReducers} from 'redux';
import haikuReducer from './haikuReducer';
import modalReducer from './modalReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	haikus: haikuReducer,
	modal: modalReducer,
	form: formReducer
});

export default rootReducer;