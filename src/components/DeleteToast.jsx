import React from 'react'
import toast from 'react-hot-toast'
import { HiOutlineTrash } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { deleteTaskRequest } from '../redux/actions/tasksActiosn'

const DeleteToast = ({ itemId, toastId }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTaskRequest(itemId, toastId))
    /* toast.loading('Loading...', { id: toastId })
    dispatch(deleteTaskRequest(itemId)).then(() =>
      toast.success('Task deleted', { id: toastId })
    ) */
  }

  return (
    <div className="toast">
      <i className="toast__icon">
        <HiOutlineTrash size="3em" color="#fff" />
      </i>
      <p className="toast__question">
        ¿Are you sure you want to delete this task?
      </p>
      <div className="toast__buttons">
        <button
          className="btn btn-cancel"
          onClick={() => toast.dismiss(toastId)}
        >
          Cancel
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteToast
