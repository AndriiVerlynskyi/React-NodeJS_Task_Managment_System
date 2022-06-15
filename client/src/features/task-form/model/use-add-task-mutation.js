import { useMutation } from 'react-query';
import { addTask } from 'shared/api/tasks';

export const useAddTaskMutation = (oMutationOpts) => {
  return useMutation(
    (data) => addTask(data),
    oMutationOpts
  )
}
