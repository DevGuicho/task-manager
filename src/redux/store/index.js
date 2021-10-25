import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import taskReducer from '../reducers/task'
import usersReducers from '../reducers/usersReducers'
import { LOGOUT } from '../types'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const appReducer = combineReducers({
  user: usersReducers,
  tasks: taskReducer,
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

const store = createStore(rootReducer, enhancer)

export default store
