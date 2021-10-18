import React from 'react'
import TaskItem from './TaskItem'

import { useSelector } from 'react-redux'

const TasksList = () => {
  const tasks = useSelector(({ tasks }) => tasks.taskList)
  return (
    <ol>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ol>
  )
}

export default TasksList
