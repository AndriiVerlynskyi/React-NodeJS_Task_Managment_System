import React from 'react';

const Task = ({ task }) => {
  const handleChangeChecked = () => {
    console.log(task)
  }

  return (
    <div className='card card-hover shadow p-3 m-3'>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.isDone}
          onChange={handleChangeChecked}
        />
        <label className="form-check-label">
          {task.title}
        </label>
      </div>
    </div>
  )
}

export default Task