import React from 'react'
import AddTask from '../components/AddTask'
import TasksList from '../components/TasksList'

const Home = () => {
  return (
    <div className="container">
      <AddTask />
      <TasksList />
    </div>
  )
}

export default Home
