import React from 'react';
import Modal from 'react-bootstrap/Modal';
import EditTaskForm from './EditTaskForm';

const EditTaskFormModal = ({ showModal, setShowModal, taskId, sorter }) => {
  return (
    <Modal show={showModal} onHide={setShowModal}>
      <Modal.Header closeButton>
        <Modal.Title> Edit task </Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <EditTaskForm
          setShowModal={setShowModal}
          taskId={taskId}
          sorter={sorter}
        />
      </Modal.Body>
    </Modal>
  )
}

export default EditTaskFormModal;