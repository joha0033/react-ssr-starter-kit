'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.PostList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _postList = require('../_actions/postList.actions');

var _reactRedux = require('react-redux');

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PostList extends _react2.default.Component {
  render() {
    const posts = () => {
      return (0, _lodash2.default)(this.props.postList.posts, post => {
        let SearchCriteria = this.props.searchBar.searchTerm;
        if (this.props.searchBar.searchTerm) {
          SearchCriteria = new RegExp(SearchCriteria, 'i');
        }
        return post.title.match(SearchCriteria) || post.content.match(SearchCriteria);
      });
    };
    const postList = () => {
      return Object.values(posts()).map((post, index) => {
        const { firstName, lastName } = this.props.postList.users[post.user_id];
        const author = firstName + ' ' + lastName;

        post = _extends({}, post, {
          author
        });

        return _react2.default.createElement(_Post2.default, {
          key: index,
          post: post
        });
      });
    };

    const loading = () => _react2.default.createElement(
      'div',
      null,
      'LOADING... '
    );

    return _react2.default.createElement(
      'div',
      null,

      // posts()
      this.props.postList.loading ? loading() : postList(posts())
    );
  }
}

exports.PostList = PostList;
PostList.propTypes = {
  fetchPosts: _propTypes2.default.func.isRequired
};

const mapStateToProps = exports.mapStateToProps = state => {
  const { postList, searchBar } = state;
  return {
    postList,
    searchBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(_postList.postListActions.fetchPosts());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostList);