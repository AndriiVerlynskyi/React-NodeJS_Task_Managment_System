import React, { useState } from 'react';
import BaseButton from 'shared/ui/BaseButton';
import Task from './components/Task';
import { TaskFormModal } from 'features/task-form';

import { taskListCardStyles } from '../lib/constants';

const tasksMock = [
  {
    title: 'New task is here YEAH',
    isDone: false,
    _id: '1a'
  },
  {
    title: 'New task is here YEAH',
    isDone: true,
    _id: '1b'
  },
  {
    title: 'New task is here YEAH',
    isDone: false,
    _id: '1c'
  },
  {
    title: 'New task is here YEAH',
    isDone: false,
    _id: '1d'
  },
  {
    title: 'New task is here YEAH',
    isDone: true,
    _id: '1e'
  }
]

const TaskList = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  return (
    <>
      <TaskFormModal showModal={showAddTaskModal} setShowModal={setShowAddTaskModal}/>
      <div className='card shadow mt-3' style={taskListCardStyles}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            margin: '10px 0 0 10px'
          }}
        >
          <BaseButton onClick={() => setShowAddTaskModal(true)}>+ Add task</BaseButton>
        </div>
        {
          tasksMock.map( task => {
            return (
              <Task key={task._id} task={task}/>
            )
          })
        }
      </div>
    </>
  )
}

export default TaskList;