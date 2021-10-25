import React, { Suspense, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from '../hoc/PrivateRoute'
import PublicRoute from '../hoc/PublicRoute'
import Loading from '../pages/Loading'
import { authUser } from '../redux/actions/usersActions'

const Home = React.lazy(() => import('../pages/Home'))
const EditTask = React.lazy(() => import('../pages/EditTask'))
const Login = React.lazy(() => import('../pages/Login'))
const Register = React.lazy(() => import('../pages/Register'))

const App = () => {
  const { user } = useSelector(({ user }) => user)
  const [isChecking, setIschecking] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user && window.localStorage.getItem('token')) {
      dispatch(authUser()).then(() => setIschecking(false))
    } else {
      setIschecking(false)
    }
  }, [user, dispatch])

  if (isChecking) {
    return <Loading />
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 4000 }} />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/edit/:id" component={EditTask} />
            <PublicRoute exact path="/auth/login" component={Login} />
            <PublicRoute exact path="/auth/sign-up" component={Register} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
