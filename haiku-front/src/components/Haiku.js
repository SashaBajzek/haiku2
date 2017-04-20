import React, {PropTypes} from 'react';

export class Haiku extends React.Component {

	render() {
		return <main>
			<h1 className="mainHaiku">{this.props.currentHaiku.get('haikuLine1')}</h1>
			<h1 className="mainHaiku">{this.props.currentHaiku.get('haikuLine2')}</h1>
			<h1 className="mainHaiku">{this.props.currentHaiku.get('haikuLine3')}</h1>
		</main>
	}
};



Haiku.propTypes = {
	currentHaiku: PropTypes.object.isRequired
}