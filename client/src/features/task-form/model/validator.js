import { object, string, date, number } from 'yup';

const TaskFormSchema = object({
  title: string()
    .required('Title is required'),
  description: string()
    .required('Description is required'),
  priority: number()
    .required('Priority is required'),
  dueDate: date()
    .required('Choose the due date, please')
})

export default TaskFormSchema;