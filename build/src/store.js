'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sagaMiddleware = undefined;

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('./_reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _initSagas = require('./initSagas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sagaMiddleware = exports.sagaMiddleware = (0, _reduxSaga2.default)();

let middleware;
process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' ? middleware = (0, _redux.applyMiddleware)(sagaMiddleware, _reduxThunk2.default, _reduxLogger.logger) : middleware = (0, _redux.applyMiddleware)(sagaMiddleware, _reduxThunk2.default);

exports.default = (0, _redux.createStore)(_reducers2.default, middleware);


(0, _initSagas.initSagas)(sagaMiddleware);