'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const postList = exports.postList = (state = {
  loading: true
}, action) => {
  switch (action.type) {
    case 'SET_POST_LIST':
      return _extends({}, state, {
        posts: action.data.posts,
        users: action.data.users,
        loading: false,
        success: true
      });
    case 'FETCHING_POST_LIST':
      return _extends({}, state, {
        loading: true
      });
    case 'POST_LIST_SUCCESS':
      return _extends({}, state, {
        success: true,
        loading: false,
        posts: action.payload.data.posts,
        users: action.payload.data.users
      });
    case 'POST_LIST_FAILURE':
      return _extends({}, state, {
        success: false,
        loading: false
      });
    default:
      return state;
  }
};