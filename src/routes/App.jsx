import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import EditTask from '../pages/EditTask'
import Home from '../pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit/:id" component={EditTask} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
