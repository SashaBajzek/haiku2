import {connect} from 'react-redux';
import {HaikuApp} from '../components/HaikuApp';
import {getAllHaikuIds} from '../selectors';
import {Map} from 'immutable';

function mapStateToProps(state, ownProps) {
	
	const currentId = state.haikus.getIn(['haikusList', 'result', state.haikus.get('currentResultIndex')])+"";
	
	return {
		result: getAllHaikuIds(state),
		haikuTheme: state.haikus.getIn(['haikusList', 'entities', 'haikus', currentId, 'haikuTheme'], Map())
	};
}

export const HaikuAppContainer = connect(mapStateToProps)(HaikuApp);

