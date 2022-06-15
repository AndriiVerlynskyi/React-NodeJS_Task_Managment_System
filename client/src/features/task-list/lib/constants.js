export const taskListCardStyles = {
  maxWidth: '40rem',
  minWidth: '60%'
}

export const taskTitles = {
  description: 'Description',
  priority: 'Priority',
  dueDate: 'Due Date'
}

export const sortOptions = [
  {
    value: 'isDone:0',
    name: 'active first'
  },
  {
    value: 'isDone:-1',
    name: 'completed first'
  },
  {
    value: 'dueDate:1',
    name: 'duration date'
  },
  {
    value: 'priority:-1',
    name: 'by higher priority'
  }
]
