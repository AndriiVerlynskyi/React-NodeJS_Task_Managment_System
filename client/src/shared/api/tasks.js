import http from 'shared/http';

const taskURL = '/api/task';

export const getTasks = () => {
  return http.get(`${taskURL}`)
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
  return http.put(`${taskURL}/${data.id}`, data)
}

export const changeIsDone = id => {
  return http.put(`${taskURL}/changeIsDone/${id}`)
}
