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
import { useTasksQuery } from 'shared/hooks/useQuery';
import { EditTaskFormModal } from 'features/task-form';

const Task = ({ task, sorter }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showTaskHandlers, setShowTaskHandlers] = useState(false);
  const [showFullTaskModal, setShowFullTaskModal] = useState(false);
  const { refetch } = useTasksQuery({}, sorter);

  const { mutateAsync: mutateDelte } = useMutation([deleteTaskQueryKey, task._id],
    () => deleteTask(task._id)
  )

  const { mutateAsync: mutateIsDone } = useMutation([changeIsDoneQueryKey, task._id],
    () => changeIsDone(task._id)
  )

  const handleDelete = async () => {
    await mutateDelte()
    await refetch()
  }

  const handleChangeChecked = async () => {
    await mutateIsDone()
    await refetch()
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
          sorter={sorter}
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