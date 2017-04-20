import React, { PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import {SubmitHaikuFormContainer} from '../containers/SubmitHaikuFormContainer';

export class SubmitHaikuModal extends React.Component {

	render() {
		if(this.props.showModal) {
			return <div className="static-modal">
					<Modal.Dialog>
						<Modal.Header className="modal-header">
							<button type="button" className="close" onClick={this.props.closeModal}><span>&times;</span></button>
							<Modal.Title className="modal-title">CREATE A HAIKU</Modal.Title>
						</Modal.Header>

						<Modal.Body>
		
							<SubmitHaikuFormContainer onSubmit={(this.props.mySubmitHandler)}/>
							
						</Modal.Body>

					</Modal.Dialog>
				</div>
			}

		return <div></div>
	}
};

SubmitHaikuModal.propTypes = {
	showModal: PropTypes.bool.isRequired
}