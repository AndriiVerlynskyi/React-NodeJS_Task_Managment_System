export const taskFormContainerStyles = {
  width: '23rem',
  display: 'flex',
  justifyContent: 'center'
};

export const ADD_TASK_INITIAL_VALUES = {
  title: '',
  description: '',
  priority: 2,
  dueDate: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString()
}

export const priorityOptions = [
  {
    value: 1,
    name: 'low'
  },
  {
    value: 2,
    name: 'medium'
  },
  {
    value: 3,
    name: 'high'
  },
  {
    value: 4,
    name: 'hot'
  }
]
