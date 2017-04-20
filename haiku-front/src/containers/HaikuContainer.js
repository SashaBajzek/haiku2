import {connect} from 'react-redux';
import {Haiku} from '../components/Haiku';
import {Map} from 'immutable';

const mapStateToProps = (state, ownProps) => {
	const currentId = state.haikus.getIn(['haikusList', 'result', state.haikus.get('currentResultIndex')])+"";
	
	return {
		currentHaiku: state.haikus.getIn(['haikusList', 'entities', 'haikus', currentId], Map())
	}	
};

export const HaikuContainer = connect(mapStateToProps)(Haiku);


