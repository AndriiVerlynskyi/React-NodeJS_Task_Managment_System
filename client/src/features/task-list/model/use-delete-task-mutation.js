import { useMutation } from "react-query";
import { deleteTask } from "shared/api/tasks";

export const useDeleteTaskMutation = (oMutationOptions) => {
  return useMutation(
    (taskId) => deleteTask(taskId),
    oMutationOptions
  )
}
