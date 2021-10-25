import apiRequest from '../../utils/axios/apiRequest'
import {
  ADD_TASK,
  DELETE_TASK,
  SELECT_TASK,
  SET_TASKS,
  SET_TASK_ERROR,
  UPDATE_TASK,
} from '../types'

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
})

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
})

export const selectTask = (id) => ({
  type: SELECT_TASK,
  payload: id,
})

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
})

export const setError = (err) => ({
  type: SET_TASK_ERROR,
  payload: err,
})

export const tasksRequest = () => async (dispatch) => {
  try {
    const { data } = await apiRequest({
      method: 'GET',
      url: '/api/tasks',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    })
    dispatch(setTasks(data.data.tasks))
  } catch (error) {
    dispatch(setError(error.response.data.message))
  }
}

export const addTaskRequest = (task) => async (dispatch) => {
  try {
    const { data } = await apiRequest({
      method: 'POST',
      url: '/api/tasks',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      data: { name: task },
    })

    dispatch(addTask(data.data))
  } catch (error) {
    dispatch(setError(error.response.data.message))
  }
}

export const updateTaskRequest = (task) => async (dispatch) => {
  const { id, ...restTask } = task
  try {
    const { data } = await apiRequest({
      method: 'PUT',
      url: `/api/tasks/${task.id}`,
      data: restTask,
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    })
    const taskUpdated = data.data
    dispatch(updateTask(taskUpdated))
  } catch (error) {
    dispatch(setError(error.response.data.message))
  }
}

export const deleteTaskRequest = (id) => async (dispatch) => {
  try {
    await apiRequest({
      method: 'DELETE',
      url: `/api/tasks/${id}`,
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    })
    dispatch(deleteTask(id))
  } catch (error) {
    dispatch(setError(error.response.data.message))
  }
}
