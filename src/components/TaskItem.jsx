import React from 'react'
import toast from 'react-hot-toast'
import { HiCheckCircle, HiPencilAlt, HiTrash, HiXCircle } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { selectTask } from '../redux/actions/tasksActiosn'
import DeleteToast from './DeleteToast'

const TaskItem = ({ name, isCompleted, id }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleEdit = () => {
    dispatch(selectTask(id))
    history.push(`/edit/${id}`)
  }
  const handleDelete = () => {
    toast((t) => <DeleteToast customToast={t} itemId={id} />)
  }
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
        <button className="link__edit" onClick={handleEdit}>
          <i className="edit">
            <HiPencilAlt size="1.5em" />
          </i>
        </button>
        <button className="link__edit" onClick={handleDelete}>
          <i className="trash">
            <HiTrash size="1.5em" />
          </i>
        </button>
      </div>
    </li>
  )
}

export default TaskItem
