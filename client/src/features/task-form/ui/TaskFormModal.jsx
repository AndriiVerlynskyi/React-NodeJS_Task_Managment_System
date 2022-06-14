import React from 'react';
import Modal from 'react-bootstrap/Modal';
import AddTaskForm from './AddTaskForm';

const TaskFormModal = ({ showModal, setShowModal }) => {
  return (
    <Modal show={showModal} onHide={setShowModal}>
      <Modal.Header closeButton>
        <Modal.Title> Add task </Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <AddTaskForm setShowModal={setShowModal}/>
      </Modal.Body>
    </Modal>
  )
}

export default TaskFormModal;