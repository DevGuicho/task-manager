import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTaskRequest } from '../redux/actions/tasksActiosn'

const AddTask = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    if (task.length > 0) {
      dispatch(addTaskRequest(task.trim()))
      setTask('')
    }
  }
  return (
    <div className="addTask__container">
      <h1>Task Manager</h1>
      <form className="addTask__form" onSubmit={handleClick}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e. g. Wash dishes"
          autoComplete="off"
          onChange={handleChange}
          value={task}
        />
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddTask
