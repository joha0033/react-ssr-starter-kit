'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostList = require('./PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _Timestamp = require('./Timestamp');

var _Timestamp2 = _interopRequireDefault(_Timestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.appState = () => {
      const { posts, searchTerm } = this.props.store.getState();
      return { posts, searchTerm };
    }, this.state = this.appState(), this.onStoreChange = () => {
      this.setState(this.appState);
    }, _temp;
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }


  // subscribe to store changes 
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    let { posts, searchTerm } = this.state;
    const SearchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      posts = (0, _lodash2.default)(posts, value => value.title.match(SearchRE) || value.content.match(SearchRE));
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Timestamp2.default, null),
      _react2.default.createElement(_SearchBar2.default, null),
      _react2.default.createElement(_PostList2.default, {
        posts: posts
      })
    );
  }
}

App.childContextTypes = {
  store: _propTypes2.default.object
};
exports.default = App;