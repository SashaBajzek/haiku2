import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import { Modal } from 'react-bootstrap';
import { RenderField } from './RenderField';
import { ThemeField } from './ThemeField';

export class SubmitHaikuForm extends Component {
	render() {
		
		const { handleSubmit, closeModal, valid} = this.props;
		
		return (
			<form onSubmit={handleSubmit}>
				<Field name="haikuLine1" type="text" component={RenderField} label="Haiku Line 1" />
				<Field name="haikuLine2" type="text" component={RenderField} label="Haiku Line 2" />
				<Field name="haikuLine3" type="text" component={RenderField} label="Haiku Line 3" />
				<Field name="haikuTheme" type="select" component={ThemeField} label="HAIKU BACKGROUND THEME:" />
				<Modal.Footer>
					<button className="submit-modal__button--close" onClick={closeModal} type="button">CLOSE</button>
					<button className="submit-modal__button--submit" type="submit" disabled={!valid} >SUBMIT HAIKU</button>
				</Modal.Footer>

			</form>
		);
		
	}
}


SubmitHaikuForm.propTypes = {
	closeModal: PropTypes.func.isRequired
}