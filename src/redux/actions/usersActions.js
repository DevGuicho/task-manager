import apiRequest from '../../utils/axios/apiRequest'
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  SET_LOADING,
  SET_LOGIN_ERROR,
  SET_USER,
} from '../types'

export const register = (user) => ({
  type: REGISTER,
  payload: user,
})

export const login = (user) => ({
  type: LOGIN,
  payload: user,
})

export const logout = () => ({
  type: LOGOUT,
})

const setError = (message) => ({
  type: SET_LOGIN_ERROR,
  payload: message,
})

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const setIsloading = () => ({
  type: SET_LOADING,
})

export const authUser = () => async (dispatch) => {
  dispatch(setIsloading())
  try {
    const { data } = await apiRequest({
      method: 'GET',
      url: '/api/auth',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    })
    dispatch(setUser(data.data.user))
  } catch (error) {
    console.log(error.response.data.message)
  }
}

export const registerRequest = (user) => async (dispatch) => {
  const { name, email, password } = user

  try {
    const { data } = await apiRequest({
      method: 'POST',
      url: '/api/auth/sign-up',
      data: {
        name,
        email,
        password,
      },
    })
    const { user, token } = data.data
    console.log({ user, token })

    window.localStorage.setItem('token', token)
    dispatch(register(user))
  } catch (error) {
    console.log('hola')
    console.log(error)
  }
}

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data } = await apiRequest({
        method: 'POST',
        url: '/api/auth/sign-in',
        data: {
          email,
          password,
        },
      })
      const { user, token } = data.data
      window.localStorage.setItem('token', token)
      dispatch(login(user))
    } catch (error) {
      dispatch(setError(error.response.data.message))
    }
  }

export const logoutUser = () => (dispatch) => {
  window.localStorage.removeItem('token')
  dispatch(logout())
}
