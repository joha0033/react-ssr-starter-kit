'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _saga = require('./saga.reducer');

var _postList = require('./postList.reducer');

var _searchBar = require('./searchBar.reducer');

const rootReducer = (0, _redux.combineReducers)({
  saga: _saga.saga,
  searchBar: _searchBar.searchBar,
  postList: _postList.postList
});

exports.default = rootReducer;