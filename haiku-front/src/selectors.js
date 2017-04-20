import { createSelector } from 'reselect';

const getHaikuIds = state => state.haikus.getIn(['haikusList', 'result']);

export const getAllHaikuIds = createSelector(
	getHaikuIds,
	(haikus)=>haikus
)