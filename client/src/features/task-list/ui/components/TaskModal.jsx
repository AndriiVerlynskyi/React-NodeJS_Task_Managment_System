import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { taskTitles } from 'features/task-list/lib/constants';
import { useSingleTaskQuery } from 'shared/hooks/useQuery';
import { isEmpty } from 'lodash';


const TaskModal = ({ showModal, setShowModal, taskId }) => {
  const {
    isLoading,
    data
  } = useSingleTaskQuery(taskId)
  
  return (
    <Modal show={showModal} onHide={setShowModal}> 
      <Modal.Header closeButton>
        <Modal.Title>
          {!isEmpty(data) &&
            data.title
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          isLoading ? (
            <div>Loading...</div>
          ) : !isEmpty(data) ? 
            Object.keys(taskTitles).map( (key, i) => {
              if ( key === 'dueDate' ) {
                return (
                  <div key={i}>
                    <b>{taskTitles[key]}: </b>
                    <span>{new Date(data[key]).toDateString()}</span>
                  </div>
                )
              } else {
                return (
                  <div key={i}>
                    <b>{taskTitles[key]}: </b>
                    <span>{data[key]}</span>
                  </div>
                )
              }
            }) : (
              <div>Can't find data</div>
            )
        }
      </Modal.Body>
    </Modal>
  )
}

export default TaskModal;
