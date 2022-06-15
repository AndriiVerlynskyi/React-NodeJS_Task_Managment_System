import React, { useEffect, useState } from 'react';
import BaseButton from 'shared/ui/BaseButton';
import Task from './components/Task';
import SortTasks from './components/SortTasks';
import { useTasksQuery } from '../model/use-tasks-query';
import { useTaskFilterData } from '../model/use-task-filter-data';
import { AddTaskFormModal } from 'features/task-form';
import { sortOptions } from 'features/task-list/lib/constants';

import { taskListCardStyles } from '../lib/constants';

const TaskList = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [sortValue, setSortValue] = useState(sortOptions[0].value);
  const {
    isLoading,
    data: response,
    isError
  } = useTasksQuery();

  const setTaskParams = useTaskFilterData();

  useEffect(() => {
    const applyFilter = async (reqParams) => {
      await setTaskParams(reqParams)
    }

    applyFilter({ sorter: [sortValue] })
  }, [sortValue])
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
            inputWidth={170}
            value={sortValue}
            onChange={(e) => {
              setSortValue(e.target.value)
            }}
          />
        </div>
        { isLoading ?
          (<div>LOADING...</div>) : !!isError ? (
            <h4 className='m-3'>Error Occured!</h4>
          ) : response.data.length ?
          response.data.map( task => {
            return (
              <Task task={task} key={task._id} />
            )
          }) : (
            <h4 className='m-3'>No tasks yet, add one!</h4>
          )
        }
      </div>
    </>
  )
}

export default TaskList;