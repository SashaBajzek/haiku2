import React from 'react';

export class AdminHaiku extends React.Component {	
	
	render() {
		return (<li className="admin">
			<p>{this.props.haikuLine1}</p>
			<p>{this.props.haikuLine2}</p>
			<p>{this.props.haikuLine3}</p>
		
			<button className="btn btn-danger" onClick={() => this.props.deleteHaiku(this.props.id)}>Delete Haiku</button>
		
		</li>	);		
	}
};