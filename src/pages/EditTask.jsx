import React from 'react'
import { Link } from 'react-router-dom'

const EditTask = () => {
  return (
    <div className="container">
      <div className="editTask__container">
        <h1>Edit Task</h1>
        <form className="editTask__form">
          <div className="editTask__form--control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="editTask__form--control">
            <input
              type="checkbox"
              name="isCompleted"
              id="isCompleted"
              defaultChecked
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
