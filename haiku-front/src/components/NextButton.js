import React, {PropTypes} from 'react';

export class NextButton extends React.Component {
	render() {
		return <button className="more" onClick={this.props.nextHaiku}>NextButton</button>
	}	
}

NextButton.propTypes = {
	nextHaiku: PropTypes.func.isRequired
}