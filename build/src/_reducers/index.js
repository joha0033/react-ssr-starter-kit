'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _postListReducer = require('./postListReducer');

var _searchBarReducer = require('./searchBarReducer');

const rootReducer = (0, _redux.combineReducers)({
  // state: {clientState: {loading: false}},
  searchBar: _searchBarReducer.searchBar,
  postList: _postListReducer.postList
});

exports.default = rootReducer;