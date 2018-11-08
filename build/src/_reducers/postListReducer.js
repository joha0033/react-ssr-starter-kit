'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const postList = exports.postList = (state = {
  // loading: true
}, action) => {
  switch (action.type) {
    case 'GET_POST_LIST':
      return _extends({}, state, {
        posts: action.data.posts,
        users: action.data.users
        // loading: true
      });
    case 'SET_POST_LIST':
      return _extends({}, state);
    case 'POST_LIST_SUCCESS':
      return _extends({}, state);
    case 'POST_LIST_FAILURE':
      return _extends({}, state);
    default:
      return state;
  }
};