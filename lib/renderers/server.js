import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
// redux docs
import { Provider } from 'react-redux'
// github -smallThings
import store from '../src/store'
// import StateApi from 'state-api'

import App from 'src/components/App'
import config from 'config'




const serverRender = async () => {
  const preloadedState = await store.getState()

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  return {
    preloadedState,
    html
  }
  
  // const response = await axios.get(`http://${config.host}:${config.port}/data`)
  // // const store = new StateApi(response.data)  // original*

  // return {
  //   initialMarkup: ReactDOMServer.renderToString(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   ),
  //   initialData: response.data
  // }
}

export default serverRender



