import { ADD_TASK, DELETE_TASK, SELECT_TASK, UPDATE_TASK } from '../types'

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
