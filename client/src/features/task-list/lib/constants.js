export const taskListCardStyles = {
  maxWidth: '40rem',
  minWidth: '60%'
}

export const taskTitles = {
  description: 'Description',
  priority: 'Priority',
  dueDate: 'Due Date'
}

// export const sortOptions = {
//   isActive: 'sort=isDone:0',
//   isDone: 'sort=isDone:-1',
//   byDueDate: 'sort=dueDate:1',
//   higherPriority: 'sort=priority:-1'
// }

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
