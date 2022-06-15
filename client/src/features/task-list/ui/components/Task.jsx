import React, { useState } from 'react';
import { useMutation } from 'react-query';
import {
  deleteTaskQueryKey,
  changeIsDoneQueryKey
} from 'shared/consts/query-constants';
import {
  deleteTask,
  changeIsDone
} from 'shared/api/tasks';
import TaskModal from './TaskModal';
import Button from 'react-bootstrap/Button';
import { EditTaskFormModal } from 'features/task-form';
import { useRefetchTasksQuery } from 'features/task-list/model/use-tasks-query';
import {
  useChangeIsDoneMutation
} from 'features/task-list/model/use-change-is-done';
import {
  useDeleteTaskMutation
} from 'features/task-list/model/use-delete-task-mutation';

import { CSSTransition } from 'react-transition-group';
import '../../lib/css-transitions.css';

const Task = ({ task }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showTaskHandlers, setShowTaskHandlers] = useState(false);
  const [showFullTaskModal, setShowFullTaskModal] = useState(false);
  
  const refetchTasksQuery = useRefetchTasksQuery();

  const { mutateAsync: mutateDelte } = useDeleteTaskMutation()

  const { mutateAsync: mutateIsDone } = useChangeIsDoneMutation()

  const handleDelete = async () => {
    await mutateDelte(task._id)
    await refetchTasksQuery()
  }

  const handleChangeChecked = async () => {
    await mutateIsDone(task._id)
    await refetchTasksQuery()
  }

  const handleEdit = () => {
    setShowEditTaskModal(true);
  }
  
  const handleShowFullTask = (e) => {
    if(
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'INPUT'
    ) {
      setShowFullTaskModal(true)
    }
  }

  return (
    <>
      { showFullTaskModal &&
        <TaskModal
          showModal={showFullTaskModal}
          setShowModal={setShowFullTaskModal}
          taskId={task._id}
        />
      }
      { showEditTaskModal &&
        <EditTaskFormModal
          showModal={showEditTaskModal}
          setShowModal={setShowEditTaskModal}
          taskId={task._id}
        />
      }
        <div
          className={
            `card shadow p-2 m-3 d-flex
            ${!task.isDone ? 'card-hover card-active shadow' : 'shadow-sm'}
            `
          }
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 64
          }}
          onClick={handleShowFullTask}
          onMouseEnter={() => setShowTaskHandlers(true)}
          onMouseLeave={() => setShowTaskHandlers(false)}
        >
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              checked={task.isDone}
              onChange={handleChangeChecked}
              id='is-done-checkbox'
            />
            <label
              className={
                `form-check-label ${task.isDone && 'done-task-title'}`
              }
            >
              {task.title}
            </label>
          </div>
            { showTaskHandlers && 
                <div className='ms-2'>
                  <Button
                    variant='outline-danger'
                    style={{ height: 25, width: 60, padding: '0px 5px' }}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                  <br/>
                  <Button
                    variant='outline-warning'
                    style={{ height: 25, width: 60, padding: '0px 5px' }}
                    onClick={handleEdit}
                  >
                    Edit
                  </Button>
                </div>
            }
        </div>
    </>
  )
}

export default Task