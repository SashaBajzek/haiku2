import * as types from './actionTypes';
import HaikuApi from './api/HaikuApi';
import { normalize, schema} from 'normalizr';

let shuffle = function (array) {
	let currentIndex = array.length, temporaryValue, randomIndex;
	//While there remain elements to shuffle
	while (0 !== currentIndex) {
		//Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -=1;
		//And swap it with the current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

export function loadHaikus() {
	return function(dispatch) {
		return HaikuApi.getAllHaikus()
			.then(haikusList => {
				const haikuSchema = new schema.Entity('haikus');
				const haikuListSchema = new schema.Array(haikuSchema);
				let normalizedHaikusList = normalize(haikusList, haikuListSchema);
				normalizedHaikusList.result = shuffle(normalizedHaikusList.result);
				dispatch(loadHaikusSuccess(normalizedHaikusList));
			})
			.catch(error => {
				throw(error);
			});
	};
}

export function loadHaikusSuccess(haikusList) {
	return {type: types.LOAD_HAIKUS_SUCCESS, haikusList};
}



export function nextHaiku() {
	return {type: types.NEXT_HAIKU};
}



export function createHaiku(haiku) {
	return function(dispatch) {
		return HaikuApi.createHaiku(haiku)
			.then(responseHaiku => {
				dispatch(createHaikuSuccess(responseHaiku));
				return responseHaiku;
			})
			.catch(error => {
				throw(error);
			})
	}
}

export function createHaikuSuccess(haiku) {
	return {type: types.CREATE_HAIKU_SUCCESS, haiku};
}


export function deleteHaiku(haikuId) {
	return function(dispatch) {
		return HaikuApi.deleteHaiku(haikuId)
			.then(() => {
				console.log(`Deleted ${haikuId}`);
				dispatch(deleteHaikuSuccess(haikuId));
				return;
			})
			.catch(error => {
				throw(error);
		})
	}
}

export function deleteHaikuSuccess(haikuId) {
	return {type: types.DELETE_HAIKU_SUCCESS, haikuId};
}




