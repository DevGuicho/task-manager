import React from 'react'
import { HiCheckCircle, HiPencilAlt, HiTrash, HiXCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const TaskItem = ({ name, isCompleted, id }) => {
  return (
    <li className="taskItem__container">
      <div className="taskItem__wrapper--name">
        <i>
          {isCompleted ? (
            <HiXCircle size="2em" color="#d83232" />
          ) : (
            <HiCheckCircle size="2em" color="#419e6a" />
          )}
        </i>
        <p className={`taskItem__name ${isCompleted ? 'completed' : ''}`}>
          {name}
        </p>
      </div>
      <div className="taskItem__wrapper--icons">
        <Link to={`/edit/${id}`} className="link__edit">
          <i className="edit">
            <HiPencilAlt size="1.5em" />
          </i>
        </Link>
        <i className="trash">
          <HiTrash size="1.5em" />
        </i>
      </div>
    </li>
  )
}

export default TaskItem
