'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PostList extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, _temp;
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      Object.values(this.props.posts).map((post, index) => {
        return _react2.default.createElement(_Post2.default, {
          key: index,
          post: post
        });
      })
    );
  }
}

exports.default = PostList;