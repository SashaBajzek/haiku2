import {connect} from 'react-redux';
import { reset } from 'redux-form';
import {closeModal} from '../actions/modalActions';
import {createHaiku} from '../actions/haikuActions';
import {SubmitHaikuModal} from '../components/SubmitHaikuModal';

function mapStateToProps(state, ownProps) {
	return {
		showModal: state.modal.getIn(['showModal'])
	};
}

const dispatchProps = (dispatch) => ({
	closeModal: () => {dispatch(closeModal())},
	mySubmitHandler: (data) => {
		dispatch(createHaiku(data));
		dispatch(reset('createHaikuForm'));
		dispatch(closeModal());
	}
});

export const SubmitHaikuModalContainer = connect(mapStateToProps, dispatchProps)(SubmitHaikuModal);