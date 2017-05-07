import React, {PropTypes} from 'react';

export class NextButton extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	
	handleButtonClick() {
		this.buttonDOM.blur();
		this.props.nextHaiku();
	}
	
	render() {
		return <button role="button" className="button--more" onClick={this.handleButtonClick} ref={(buttonDOM) => { this.buttonDOM = buttonDOM; }} >MORE HAIKUS</button>
	}	
}

NextButton.propTypes = {
	nextHaiku: PropTypes.func.isRequired
}