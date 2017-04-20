import React from 'react';
import {SubmitButtonContainer} from '../containers/SubmitButtonContainer';

export class Header extends React.Component {	
	render() {
		return <header>
				<h1 className="brand">Haiku For You</h1>
				<SubmitButtonContainer />
			</header>
	}
}
