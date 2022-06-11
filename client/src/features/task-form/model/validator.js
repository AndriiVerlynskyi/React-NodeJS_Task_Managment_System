import { object, string, date } from 'yup';

const TaskFormSchema = object({
  title: string()
    .required('Title is required'),
  description: string()
    .required('Description is required'),
  priority: string()
    .required('Fill the priority is required'),
  dueDate: date()
    .required('Choose the due date, please')
})

export default TaskFormSchema;