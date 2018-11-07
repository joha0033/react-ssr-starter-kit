'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#abc',
    borderBottomWidth: 2,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  content: {
    paddingLeft: 20,
    paddingRight: 10
  }
};

class Post extends _react2.default.PureComponent {

  render() {
    const post = this.props.post;

    return _react2.default.createElement(
      'div',
      { style: styles.article },
      _react2.default.createElement(
        'div',
        { style: styles.title },
        post.title
      ),
      _react2.default.createElement(
        'div',
        { style: styles.author },
        'Author: ',
        post.author
      ),
      _react2.default.createElement(
        'div',
        { style: styles.content },
        post.content
      )
    );
  }
}

Post.propTypes = {
  author: _propTypes2.default.shape({
    firstName: _propTypes2.default.string.isRequired,
    lastName: _propTypes2.default.string.isRequired
  }),
  post: _propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.string.isRequired
  })
};

exports.default = Post;