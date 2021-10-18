import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/tasksActiosn'

const AddTask = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleClick = () => {
    dispatch(addTask(task))
  }
  return (
    <div className="addTask__container">
      <h1>Task Manager</h1>
      <div className="addTask__form">
        <input
          type="text"
          name="newTask"
          id="newTask"
          placeholder="e. g. Wash dishes"
          onChange={handleChange}
        />
        <button className="btn-primary" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddTask
