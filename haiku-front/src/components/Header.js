import React from 'react';
import {SubmitButtonContainer} from '../containers/SubmitButtonContainer';

export class Header extends React.Component {	
	render() {
		return <header>
				<h1 className="brand">HAIKU FOR YOU</h1>
				<SubmitButtonContainer />
			</header>
	}
}
