import { useQueryClient } from "react-query";
import { taskParamsKey, tasksQueryKey } from "shared/consts/query-constants";

export const useTaskFilterData = () => {
  const queryClient = useQueryClient();

  return async (taskParams) => {
    queryClient.setQueryData(taskParamsKey, taskParams)
    await queryClient.refetchQueries([tasksQueryKey], { active: true })
  }
};
