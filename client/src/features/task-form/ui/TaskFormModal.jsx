import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TaskForm from './TaskForm';
import CenteredContainer from 'shared/ui/Containers/CenteredContainer';

const TaskFormModal = ({ showModal, setShowModal }) => {
  return (
    <Modal show={showModal} onHide={setShowModal}>
      <Modal.Header closeButton>
        <Modal.Title> Add task </Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <TaskForm/>
      </Modal.Body>
    </Modal>
  )
}

export default TaskFormModal;