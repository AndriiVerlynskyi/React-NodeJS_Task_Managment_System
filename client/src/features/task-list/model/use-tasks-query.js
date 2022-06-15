import { useQuery, useQueryClient } from "react-query";
import { getTasks } from "shared/api/tasks";
import { taskParamsKey, tasksQueryKey } from "shared/consts/query-constants";

export const useTasksQuery = () => {
  const queryClient = useQueryClient();
  const taskParams = queryClient.getQueryData(taskParamsKey);

  return useQuery([tasksQueryKey, taskParams], 
   () => getTasks(taskParams)
  )
};

export const useRefetchTasksQuery = () => {
  const queryClient = useQueryClient();

  return () => {
    return queryClient.refetchQueries([tasksQueryKey], { active: true });
  }
}
