import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { login } from '../redux/actions/usersActions'
import { SignInSchema } from '../utils/schemas/SignUpSchema'
import SocialButtons from './SocialButtons'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = ({ email }) => {
    dispatch(
      login({
        name: 'Luis Vazquez',
        email,
        token: 'dfsaferfd123fddfasfer345g',
      })
    )
    history.replace('/')
  }

  return (
    <div className="container">
      <div className="login__wrapper">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          onSubmit={handleSubmit}
          validationSchema={SignInSchema}
        >
          <Form action="">
            <div className="input-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="input-control__error"
              />
            </div>
            <div className="input-control">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="p"
                className="input-control__error"
              />
            </div>
            <div className="login__options">
              <label htmlFor="remember">
                <Field type="checkbox" name="remember" id="remember" />
                Remember Me
              </label>
              <Link to="/">Forgot password ?</Link>
            </div>

            <button className="btn-primary btn-login" type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <div className="login__hr">
          <span></span>
          <p>or sign in with</p>
          <span></span>
        </div>
        <SocialButtons />
      </div>
    </div>
  )
}

export default Login
