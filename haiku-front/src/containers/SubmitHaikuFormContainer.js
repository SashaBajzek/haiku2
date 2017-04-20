import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { SubmitHaikuForm } from '../components/SubmitHaikuForm';
import {closeModal} from '../actions/modalActions';;


const validate = (values, props) => {
	const errors = {};
	if(!values.haikuLine1) {
		errors.haikuLine1 = 'haiku line 1 required'
	} else if (values.haikuLine1.length < 5) {
		errors.haikuLine1 = 'Must be 5 syllables'
	}
	
	if (!values.haikuLine2) {
		errors.haikuLine2 = 'haiku line 2 required'
	} else if (values.haikuLine2.length < 7) {
		errors.haikuLine2 = 'Must be 7 syllables'
	} 
	
	if (!values.haikuLine3) {
		errors.haikuLine3 = 'haiku line 3 required'
	} else if (values.haikuLine3.length < 5) {
		errors.haikuLine3 = 'Must be 5 syllables'
	} 
	
	if (!values.haikuTheme) {
		errors.haikuTheme = 'haiku theme required'
	}
	
	return errors;
}


const dispatchProps = (dispatch) => ({
	closeModal: () => {dispatch(closeModal())}
});

export const SubmitHaikuFormContainer = connect(
	null, 
	dispatchProps) (reduxForm({
		form: 'createHaikuForm',  //a unique name for this form
		validate
	})(SubmitHaikuForm));