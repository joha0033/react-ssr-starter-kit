'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.currentPostsSaga = currentPostsSaga;

var _effects = require('redux-saga/effects');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _actions = require('./../_actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* currentPostsSaga() {
  const URL = `http://${_config2.default.host}:${_config2.default.port}/data`;
  const response = yield (0, _effects.call)(_isomorphicFetch2.default, URL);
  const data = yield (0, _effects.apply)(response, response.json);
  const mapIntoObject = arr => {
    return arr.reduce((acc, cur) => {
      acc[cur._id] = cur;
      return acc;
    }, {});
  };
  let newRes = {};

  Object.keys(data).forEach(key => {
    let obj = mapIntoObject(data[key], key);
    newRes = _extends({}, newRes, {
      [key]: obj
    });
  });

  yield (0, _effects.put)((0, _actions.setPostList)(newRes));
}