import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from '../hoc/PrivateRoute'
import PublicRoute from '../hoc/PublicRoute'
import EditTask from '../pages/EditTask'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/edit/:id" component={EditTask} />
        <PublicRoute exact path="/auth/login" component={Login} />
        <PublicRoute exact path="/auth/sign-up" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
