'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeProvider = require('./storeProvider');

var _storeProvider2 = _interopRequireDefault(_storeProvider);

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
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, _temp;
  }

  render() {
    const { post, author } = this.props;
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
        author.firstName,
        ' ',
        author.lastName
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

function mapProps(store, props) {
  return {
    author: store.lookupAuthor(props.post.user_id)
  };
}

// access store for extracting data in a container when Redux is hooked up.

exports.default = (0, _storeProvider2.default)(mapProps)(Post);