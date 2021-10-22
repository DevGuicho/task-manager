import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'animate.css'

import App from './routes/App'
import './styles/main.css'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
