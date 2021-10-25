import React, { useEffect } from 'react'
import TaskItem from './TaskItem'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasksRequest } from '../redux/actions/tasksActiosn'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TasksList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(({ tasks }) => tasks.taskList)

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(tasksRequest())
    }
  }, [tasks, dispatch])
  return (
    <TransitionGroup component="ol">
      {tasks.map((task) => (
        <CSSTransition key={task.id} timeout={300} classNames="transition">
          <TaskItem {...task} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default TasksList
