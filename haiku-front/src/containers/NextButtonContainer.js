import {connect} from 'react-redux';
import {nextHaiku} from '../actions/haikuActions';
import {NextButton} from '../components/NextButton';

const dispatchProps = {nextHaiku};

export const NextButtonContainer = connect(null, dispatchProps)(NextButton);