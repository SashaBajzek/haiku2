import {connect} from 'react-redux';
import {Admin} from '../components/Admin';


const mapStateToProps = (state, ownProps) => ({
	haikuIds: state.haikus.getIn(['haikusList', 'result'], ['0'])
});

export const AdminContainer = connect(mapStateToProps)(Admin);
