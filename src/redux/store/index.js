import { createStore, combineReducers } from 'redux'
import taskReducer from '../reducers/task'
import usersReducers from '../reducers/usersReducers'

const reducers = combineReducers({
  user: usersReducers,
  tasks: taskReducer,
})
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
