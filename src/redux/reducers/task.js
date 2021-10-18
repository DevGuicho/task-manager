/* eslint-disable import/no-anonymous-default-export */

import { ADD_TASK, DELETE_TASK, SELECT_TASK, UPDATE_TASK } from '../types'

const initialState = {
  taskList: [
    {
      id: '23r43q',
      name: 'Walk the dog',
      isCompleted: false,
    },
    {
      id: 'fdasfdas',
      name: 'Do homework',
      isCompleted: true,
    },
  ],
  selectedTask: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            id: Date.now().toString(),
            name: action.payload,
            isCompleted: false,
          },
        ],
      }
    case SELECT_TASK:
      return {
        ...state,
        selectedTask: state.taskList.find((task) => task.id === action.payload),
      }
    case UPDATE_TASK:
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
    default:
      return state
  }
}
