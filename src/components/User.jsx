import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import placeholder from '../assets/placeholder.jpg'
import { logout } from '../redux/actions/usersActions'

const User = () => {
  const { name } = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="user__wrapper">
      <img src={placeholder} alt="" className="user__avatar" />
      <p className="user__name">{name}</p>
      <button type="button" className="user__logout" onClick={handleLogout}>
        <HiOutlineLogout size="1.8em" color="#1976D2" />
      </button>
    </div>
  )
}

export default User
