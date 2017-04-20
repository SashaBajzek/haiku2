import React, {PropTypes} from 'react';

export class SubmitButton extends React.Component {
	render() {
		return <button className="submit" onClick={this.props.openModal}>SubmitButton</button>
	}
}

SubmitButton.propTypes = {
	openModal: PropTypes.func.isRequired
}