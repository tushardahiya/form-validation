import React from 'react';
import { Modal } from 'semantic-ui-react'


const modal = (props) => (
    <Modal trigger>
        <Modal.Header>Submited Details</Modal.Header>
        <Modal.Content >
            <Modal.Description>
                <p>{props.state}</p>

            </Modal.Description>
        </Modal.Content>
    </Modal>
);

export default modal;