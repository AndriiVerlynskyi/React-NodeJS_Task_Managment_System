import React, { useState } from 'react';
import BaseButton from 'shared/ui/BaseButton';
import Task from './components/Task';
import SortTasks from './components/SortTasks';
import { useTasksQuery } from 'shared/hooks/useQuery';
import { AddTaskFormModal } from 'features/task-form';
import { sortOptions } from 'features/task-list/lib/constants';

import { taskListCardStyles } from '../lib/constants';

const TaskList = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [sortValue, setSortValue] = useState(sortOptions[0])
  const {
    isLoading,
    data: response,
    isError
  } = useTasksQuery({}, [sortValue.value]);

  return (
    <>
      <AddTaskFormModal
        showModal={showAddTaskModal}
        setShowModal={setShowAddTaskModal}
      />
      <div className='card shadow mt-3' style={taskListCardStyles}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 18px 0 10px'
          }}
        >
          <BaseButton onClick={() => setShowAddTaskModal(true)}>+ Add task</BaseButton>
          <SortTasks
            inputWidth={150}
            value={sortValue.value}
            onChange={(e) => {
              setSortValue({
                value: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
              })
            }}
          />
        </div>
        { isLoading ?
          (<div>LOADING...</div>) : response.data.length ?
          response.data.map( task => {
            return (
              <Task key={task._id} task={task} sorter={[sortValue.value]}/>
            )
          }) : !!isError ? (
            <h4 className='m-3'>Error Occured!</h4>
          ) : (
            <h4 className='m-3'>No tasks yet, add one!</h4>
          )
        }
      </div>
    </>
  )
}

export default TaskList;