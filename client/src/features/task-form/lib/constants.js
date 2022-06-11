export const taskFormContainerStyles = {
  width: '23rem',
  display: 'flex',
  justifyContent: 'center'
};

export const ADD_TASK_INITIAL_VALUES = {
  title: '',
  description: '',
  priority: 'medium',
  dueDate: new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
}

export const priorityOptions = [
  'low',
  'medium',
  'high',
  'hot'
]
