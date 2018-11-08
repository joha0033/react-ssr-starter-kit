import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './_reducers'
// import { initSagas } from './initSagas'

// export const sagaMiddleware = createSagaMiddleware()


let middleware
process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' ?
  middleware = applyMiddleware(thunk, logger) : 
  middleware = applyMiddleware(thunk)

const store = createStore(
  rootReducer, 
  middleware
)

// initSagas(sagaMiddleware)

export default store

