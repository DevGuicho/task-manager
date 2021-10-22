import { LOGIN, LOGOUT } from '../types'

const initialState = null

/* eslint-disable import/no-anonymous-default-export */
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      }
    case LOGOUT:
      return null
    default:
      return state
  }
}
