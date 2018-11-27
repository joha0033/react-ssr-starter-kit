import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './_reducers'

// import createSagaMiddleware from 'redux-saga'
// import { initSagas } from './initSagas'
// export const sagaMiddleware = createSagaMiddleware()

/**
 * Add saga back into webpack vendor files when ready
 *  Code split it... it doesn't really do anything right now...
 *  It's just hooked up.
 */

export let middleware
process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' 
  ? middleware = applyMiddleware(thunk, logger)
  : middleware = applyMiddleware(thunk)

const store = createStore(
  rootReducer, 
  middleware
)
console.log(store, 'STORE!')

// initSagas(sagaMiddleware)

export default store
