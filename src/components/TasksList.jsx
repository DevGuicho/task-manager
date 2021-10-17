import React from 'react'
import TaskItem from './TaskItem'

const TASK_LIST = [
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
]

const TasksList = () => {
  return (
    <ol>
      {TASK_LIST.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ol>
  )
}

export default TasksList
