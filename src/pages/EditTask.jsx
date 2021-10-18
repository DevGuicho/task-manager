import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link, useParams, useHistory } from 'react-router-dom'
import { selectTask, updateTask } from '../redux/actions/tasksActiosn'

const EditTask = () => {
  const [editedTask, setEditedTask] = useState({})
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const task = useSelector(({ tasks }) => tasks.selectedTask)

  useEffect(() => {
    if (!task) dispatch(selectTask(id))
    setEditedTask(task)
  }, [task])

  const handleChange = (e) => {
    if (e.target.name === 'isCompleted') {
      setEditedTask({
        ...editedTask,
        isCompleted: e.target.checked,
      })
    } else {
      setEditedTask({
        ...editedTask,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTask(editedTask))
    history.push('/')
  }
  return (
    <div className="container">
      <div className="editTask__container">
        <h1>Edit Task</h1>
        <form className="editTask__form" onSubmit={handleSubmit}>
          <div className="editTask__form--control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={editedTask?.name || ''}
            />
          </div>
          <div className="editTask__form--control">
            <input
              type="checkbox"
              name="isCompleted"
              id="isCompleted"
              onChange={handleChange}
              checked={editedTask?.isCompleted || false}
            />
            <div className="checkbox"></div>
            <label htmlFor="isCompleted">Completed</label>
          </div>
          <button className="btn-primary" type="submit">
            Edit
          </button>
        </form>
      </div>
      <div className="btn-wrapper">
        <Link to="/" className="btn-link">
          Back to Tasks
        </Link>
      </div>
    </div>
  )
}

export default EditTask
