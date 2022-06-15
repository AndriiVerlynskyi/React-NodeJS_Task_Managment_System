import { useQuery } from "react-query";
import { signleTaskQueryKey } from "shared/consts/query-constants";
import { getTaskById } from "shared/api/tasks";
import { definePriority } from 'features/task-list/model/define-priority';

export const useSingleTaskQuery = ( taskId ) => {
  return useQuery(
    [ signleTaskQueryKey, taskId ],
    () => getTaskById(taskId),
    {
      select: ({ data }) => {
        data = {...data, priority: definePriority(data.priority)}
        return data
      }
    }
  )
};
