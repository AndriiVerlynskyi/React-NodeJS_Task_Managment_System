import React from 'react';
import Modal from 'react-bootstrap/Modal';
import EditTaskForm from './EditTaskForm';

const TaskFormModal = ({ showModal, setShowModal, taskId }) => {
  return (
    <Modal show={showModal} onHide={setShowModal}>
      <Modal.Header closeButton>
        <Modal.Title> Edit task </Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <EditTaskForm setShowModal={setShowModal} taskId={taskId}/>
      </Modal.Body>
    </Modal>
  )
}

export default TaskFormModal;