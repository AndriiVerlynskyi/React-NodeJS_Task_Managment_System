import { getTaskById, getTasks } from 'shared/api/tasks';
import { useQuery } from 'react-query';
import {
  signleTaskQueryKey,
  tasksQueryKey
} from 'shared/consts/query-constants';
import { definePriority } from 'features/task-list/model/define-priority';

export const useTasksQuery = (filter, sorter) => {
  const queryData = useQuery([tasksQueryKey, filter, sorter], 
    () => getTasks(filter, sorter), {
      keepPreviousData: true
    }
  )

  return queryData
}

export const useSingleTaskQuery = ( taskId ) => {
  const queryData = useQuery(
    [ signleTaskQueryKey, taskId ],
    () => getTaskById(taskId),
    {
      select: ({ data }) => {
        data = {...data, priority: definePriority(data.priority)}
        return data
      },
      // onSuccess: (data) => {
      //   data = {...data, priority: definePriority(data.priority)}
      //   console.log(data)
      // }
    }
  )

  return queryData
}
