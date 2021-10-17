import React from 'react'

const AddTask = () => {
  return (
    <div className="addTask__container">
      <h1>Task Manager</h1>
      <div className="addTask__form">
        <input
          type="text"
          name="newTask"
          id="newTask"
          placeholder="e. g. Wash dishes"
        />
        <button className="btn-primary">Submit</button>
      </div>
    </div>
  )
}

export default AddTask
