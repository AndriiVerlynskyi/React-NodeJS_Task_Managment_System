import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ConfirmEmail = ({ showModal, setShowModal }) => {
  return (
    <Modal show={showModal} onHide={setShowModal}> 
      <Modal.Header closeButton>
        <Modal.Title>
          Confirm account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>
          You haven't verified your account yet. Check mail to verify one.
        </span>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmEmail;