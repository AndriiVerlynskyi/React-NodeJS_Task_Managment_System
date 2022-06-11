import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ConfirmEmail = ({ showModal, setShowModal }) => {
  const handleSendEmail = async () => {
    try {
      setShowModal(false)
    } catch (err) {
      alert(err.message ? err.message : err)
    }
  }

  return (
    <Modal show={showModal} onHide={setShowModal}> 
      <Modal.Header closeButton>
        <Modal.Title>
          Confirm account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>You haven't verified your account yet </span>
        <a href='' onClick={handleSendEmail} className='stretched-link'>
          click here
        </a>
        <span> to send the email.</span>
      </Modal.Body>
    </Modal>
  )
}

export default ConfirmEmail;