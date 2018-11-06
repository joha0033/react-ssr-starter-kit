import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import store from '../src/store'
import App from 'src/components/App'

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
}

export default serverRender



