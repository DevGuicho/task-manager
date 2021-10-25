import React from 'react'
import { Helmet } from 'react-helmet'
import AddTask from '../components/AddTask'
import TasksList from '../components/TasksList'
import User from '../components/User'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Task Manager</title>
      </Helmet>
      <div className="container">
        <User />
        <AddTask />
        <TasksList />
      </div>
    </>
  )
}

export default Home
