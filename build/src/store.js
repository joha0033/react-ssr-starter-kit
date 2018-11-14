'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./_reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createSagaMiddleware from 'redux-saga'
// import { initSagas } from './initSagas'
// export const sagaMiddleware = createSagaMiddleware()

/**
 * Add saga back into webpack vendor files when ready
 *  Code split it... it doesn't really do anything right now...
 *  It's just hooked up.
 */

let middleware;
process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' ? middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger.logger) : middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);

const store = (0, _redux.createStore)(_reducers2.default, middleware);

// initSagas(sagaMiddleware)

exports.default = store;