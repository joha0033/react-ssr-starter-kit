'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRedux = require('react-redux');

var _store = require('../src/store');

var _store2 = _interopRequireDefault(_store);

var _App = require('src/components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverRender = async () => {
  const preloadedState = await _store2.default.getState();

  const html = _server2.default.renderToString(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_App2.default, null)
  ));

  return {
    preloadedState,
    html
  };
};

exports.default = serverRender;