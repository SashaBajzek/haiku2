import React, {PropTypes} from 'react';

export class SubmitButton extends React.Component {
	render() {
		return <button className="button--submit" onClick={this.props.openModal}>SUBMIT A HAIKU</button>
	}
}

SubmitButton.propTypes = {
	openModal: PropTypes.func.isRequired
}