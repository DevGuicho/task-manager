import toast from 'react-hot-toast'
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
  toast.promise(
    apiRequest({
      method: 'POST',
      url: '/api/tasks',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      data: { name: task },
    }),
    {
      success: ({ data }) => {
        dispatch(addTask(data.data))
        return <b>Task added</b>
      },
      loading: <b>Saving Task...</b>,
      error: (error) => {
        dispatch(setError(error.response.data.message))
        return <b>{error.response.data.message}</b>
      },
    }
  )
}

export const updateTaskRequest = (task) => async (dispatch) => {
  const { id, ...restTask } = task

  await toast.promise(
    apiRequest({
      method: 'PUT',
      url: `/api/tasks/${task.id}`,
      data: restTask,
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    }),
    {
      success: ({ data }) => {
        const taskUpdated = data.data
        dispatch(updateTask(taskUpdated))
        return <b>Task updated</b>
      },
      loading: <b>Updating task...</b>,
      error: (error) => {
        dispatch(setError(error.response.data.message))
        return <b>{error.response.data.message}</b>
      },
    }
  )
}

export const deleteTaskRequest = (id, toastId) => async (dispatch) => {
  toast.promise(
    apiRequest({
      method: 'DELETE',
      url: `/api/tasks/${id}`,
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    }),
    {
      success: () => {
        dispatch(deleteTask(id))
        return <b>Task deleted</b>
      },
      loading: <b>Deleting task...</b>,
      error: (error) => {
        dispatch(setError(error.response.data.message))
        return <b>{error.response.data.message}</b>
      },
    },
    { id: toastId }
  )
}
