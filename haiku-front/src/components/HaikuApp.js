import React from 'react';
import {Header} from './Header';
import {HaikuContainer} from '../containers/HaikuContainer';
import {Footer} from './Footer';
import {SubmitHaikuModalContainer} from '../containers/SubmitHaikuModalContainer';

export class HaikuApp extends React.Component {
	
	render() {
		return <div className={this.props.haikuTheme + " haikuApp themes"}>
			<Header />
			<HaikuContainer />
			<Footer />
			<SubmitHaikuModalContainer />
		</div>
	}
};