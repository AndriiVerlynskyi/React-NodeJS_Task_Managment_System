import { useMutation } from 'react-query';
import { editTaskQueryKey } from 'shared/consts/query-constants';
import { editTask } from 'shared/api/tasks';
import { definePriority } from 'features/task-list/model/define-priority';

export const useEditTaskMutation = (oMutationOpts) => {
  return useMutation(
    (data) => editTask(data),
    oMutationOpts
  )
}
