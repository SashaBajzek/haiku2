import * as types from '../actions/actionTypes';
import {initialState} from './initialState';

export default function modalReducer(state=initialState, action) {
	switch(action.type) {
		case types.LOAD_MODAL:
			return state.set('showModal', false);
		case types.OPEN_MODAL: 
			return state.updateIn(['showModal'], showModal => true);
		case types.CLOSE_MODAL: 
			return state.updateIn(['showModal'], showModal => false);	
		
		default:
			return state;	
	}
}


