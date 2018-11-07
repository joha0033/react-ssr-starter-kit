'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostList = require('./PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_SearchBar2.default, null),
      _react2.default.createElement(_PostList2.default, null)
    );
  }
}

exports.default = App;