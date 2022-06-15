import { useMutation } from "react-query";
import { changeIsDone } from "shared/api/tasks";

export const useChangeIsDoneMutation = (oMutationOptions) => {
  return useMutation(
    (taskId) => changeIsDone(taskId),
    oMutationOptions
  )
}
