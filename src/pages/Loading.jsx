import React from 'react'
import { Helmet } from 'react-helmet'
import Spinner from '../components/Spinner'

const Loading = () => {
  return (
    <>
      <Helmet>
        <title>Loading... | Task Manager</title>
      </Helmet>
      <div className="loading">
        <Spinner />
      </div>
    </>
  )
}

export default Loading
