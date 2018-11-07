'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const searchBar = exports.searchBar = (state = { searchTerm: '' }, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return _extends({}, state, {
        searchTerm: action.payload
      });
    default:
      return state;
  }
};