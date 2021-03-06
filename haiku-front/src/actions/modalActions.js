import * as types from './actionTypes';

export function loadModal() {
	return {type: types.LOAD_MODAL};
}

export function openModal() {
	return {type: types.OPEN_MODAL};
}

export function closeModal() {
	return {type: types.CLOSE_MODAL};
}
