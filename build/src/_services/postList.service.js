'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postListService = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetchPosts = token => {
  let options = {
    headers: {
      authorization: token
    }
  };

  let URL = `http://${_config2.default.host}:${_config2.default.port}/data`;

  return fetch(URL, options).then(response => {

    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  }).then(response => {

    if (response) {
      const mapIntoObject = arr => {
        return arr.reduce((acc, cur) => {
          acc[cur._id] = cur;
          return acc;
        }, {});
      };
      let newRes = {};

      Object.keys(response).forEach(key => {
        // console.log('key>>', key)

        let obj = mapIntoObject(response[key], key);
        newRes = _extends({}, newRes, {
          [key]: obj
        });
      });

      return newRes;
    }
    return null;
  }).catch(err => alert(err));
};

const postListService = exports.postListService = {
  fetchPosts
};