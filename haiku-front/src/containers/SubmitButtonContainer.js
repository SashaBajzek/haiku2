import {connect} from 'react-redux';
import {openModal} from '../actions/modalActions';
import {SubmitButton} from '../components/SubmitButton';

const dispatchProps = {openModal};

export const SubmitButtonContainer = connect(null, dispatchProps)(SubmitButton);