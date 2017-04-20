import * as types from '../actions/actionTypes';
import {initialState} from './initialState';
import {fromJS} from 'immutable';

export default function haikuReducer(state=initialState, action) {
	switch(action.type) {
			
		case types.LOAD_HAIKUS_SUCCESS:
			return state.set('haikusList', fromJS(action.haikusList))
				.set('currentResultIndex', 0)
			
		case types.NEXT_HAIKU: {
			const maxIndex = state.getIn(['haikusList', 'result'], [0]).size - 1;
			
			if(state.get('currentResultIndex') < maxIndex) {
				return state.updateIn(['currentResultIndex'], 0, currentResultIndex => currentResultIndex + 1);
			} else {
				return state.updateIn(['currentResultIndex'], 0, currentResultIndex => 0)
			}
		}
			
		case types.CREATE_HAIKU_SUCCESS: {
			const newHaiku = fromJS(action.haiku);
			const newResult = fromJS(action.haiku.id);
			
			return state
				.setIn(['haikusList', 'entities', 'haikus', action.haiku.id.toString()], newHaiku)
				.update('currentResultIndex', currentResultIndex => currentResultIndex + 1)
				.updateIn(['haikusList', 'result'], result => result.splice(state.get('currentResultIndex') + 1, 0, newResult));	
		}
			
		case types.DELETE_HAIKU_SUCCESS: {
			const haikuResultIndex = state.getIn(['haikusList', 'result']).findIndex(id => {
				return id === action.haikuId
			});

			return state
				.updateIn(['haikusList', 'entities', 'haikus'],
								(haikusList) => haikusList.filterNot(
												(haiku) => haiku.get('id') === action.haikuId))
				.updateIn(['haikusList', 'result'], (resultList) => resultList.delete(haikuResultIndex.toString()));
		}
			
		default:
			return state;	
	}
}

