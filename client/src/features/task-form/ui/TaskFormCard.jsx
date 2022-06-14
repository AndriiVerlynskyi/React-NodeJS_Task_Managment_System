import React from 'react';
import TaskForm from './AddTaskForm';
import { taskFormContainerStyles } from '../lib/constants';

const TaskFormCard = () => {
  return (
    <div className="card shadow mt-5" style={ taskFormContainerStyles }>
      <div className="card-body">
        <h4 className='card-title'>Add task</h4>
        <TaskForm/>
        </div>
    </div>
  )
}

export default TaskFormCard;