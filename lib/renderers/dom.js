import React from 'react'
import ReactDOM from 'react-dom'
import App from 'src/components/App'
import { Provider } from 'react-redux'
import store from '../src/store'
// const store = new StateApi(window.initialData)

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
 
