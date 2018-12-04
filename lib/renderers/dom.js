import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/app'
import { Provider } from 'react-redux'
import store from '../src/store'
// import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
 
