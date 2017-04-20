import React from 'react';
import {AdminHaikuContainer} from '../containers/AdminHaikuContainer';

export class Admin extends React.Component {	
	
	render() {
		return <div>
			<h1 className="heading__admin">Admin Page</h1>
			
			<ul className="adminPage">
				{this.props.haikuIds.map(haiku =>
				 	<AdminHaikuContainer key={haiku} id={haiku}/>
				 )}
			</ul>
		
		</div>			
	}
};
