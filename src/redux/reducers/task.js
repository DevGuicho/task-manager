/* eslint-disable import/no-anonymous-default-export */

import {
  ADD_TASK,
  DELETE_TASK,
  SELECT_TASK,
  SET_TASKS,
  SET_TASK_ERROR,
  UPDATE_TASK,
} from '../types'

const initialState = {
  taskList: [],
  selectedTask: null,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        taskList: action.payload,
      }
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      }
    case SELECT_TASK:
      return {
        ...state,
        selectedTask: state.taskList.find((task) => task.id === action.payload),
      }
    case UPDATE_TASK:
      /* const indexOf = state.taskList.indexOf(
        (task) => task.id === action.payload.id
      )
      state.taskList[indexOf] = action.payload */
      return {
        ...state,
        selectedTask: null,
        taskList: state.taskList.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload
          }
          return task
        }),
      }
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      }
    case SET_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
