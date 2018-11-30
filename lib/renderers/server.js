import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import store from '../src/store'
import App from 'src/components/App'
// import { StaticRouter } from 'react-router-dom'

// const context ={}

const serverRender = async () => {
  let preloadedState = await store.getState()
  
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>    
  )

  // const helmet = Helmet.renderStatic()
  
  return {
    // helmet,
    preloadedState,
    html
  }
}

export default serverRender



