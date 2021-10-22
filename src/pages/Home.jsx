import React from 'react'
import AddTask from '../components/AddTask'
import TasksList from '../components/TasksList'
import User from '../components/User'

const Home = () => {
  return (
    <div className="container">
      <User />
      <AddTask />
      <TasksList />
    </div>
  )
}

export default Home
