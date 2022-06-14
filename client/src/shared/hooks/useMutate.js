import { useMutate } from 'react-query';
import { addTaskQueryKey } from 'shared/consts/query-constants';
import { addTask } from 'shared/api/tasks';

export const useMutateAddTask = data => {
  const mutateData = useMutate(addTaskQueryKey, 
    () => addTask(data)
  )

  return mutateData;
}
