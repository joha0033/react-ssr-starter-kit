'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPostList = exports.SET_POST_LIST = undefined;

var _utility = require('../_utility');

const SET_POST_LIST = exports.SET_POST_LIST = 'SET_POST_LIST';
const setPostList = exports.setPostList = (0, _utility.makeActionCreator)(SET_POST_LIST, 'data');