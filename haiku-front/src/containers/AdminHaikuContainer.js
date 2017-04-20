import {connect} from 'react-redux';
import {deleteHaiku} from '../actions/haikuActions';
import {AdminHaiku} from '../components/AdminHaiku';


const mapStateToProps = (state, ownProps) => ({
	haikuLine1: state.haikus.getIn(['haikusList', 'entities', 'haikus', ownProps.id.toString(), 'haikuLine1']),
	haikuLine2: state.haikus.getIn(['haikusList', 'entities', 'haikus', ownProps.id.toString(), 'haikuLine2']),
	haikuLine3: state.haikus.getIn(['haikusList', 'entities', 'haikus', ownProps.id.toString(), 'haikuLine3'])
});


const dispatchProps = {deleteHaiku};

export const AdminHaikuContainer = connect(mapStateToProps, dispatchProps)(AdminHaiku);
