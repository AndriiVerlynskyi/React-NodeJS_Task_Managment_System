import http from 'shared/http';
import { createQueryString } from 'shared/utils/create-query-string';

const taskURL = '/api/task';

export const getTasks = (params) => {
  const { filter, sorter, page } = params || {};
  const queryString = createQueryString(filter, sorter, page);
  return http.get(`${taskURL}${queryString}`)
}

export const getTaskById = id => {
  return http.get(`${taskURL}/${id}`)
}

export const addTask = data => {
  return http.post(taskURL, data)
}

export const deleteTask = id => {
  return http.delete(`${taskURL}/${id}`)
}

export const editTask = data => {
  return http.put(`${taskURL}/${data._id}`, data)
}

export const changeIsDone = id => {
  return http.put(`${taskURL}/changeIsDone/${id}`)
}
