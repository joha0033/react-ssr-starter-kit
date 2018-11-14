'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchBar = require('../_actions/searchBar.actions');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  searchInput: {
    margin: `${2}em`
  }
};

class SearchBar extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      searchTerm: ''
    }, this.doSearch = (0, _lodash2.default)(() => {
      this.props.setSearchTerm(this.state.searchTerm);
    }, 400), this.handleSearch = event => {
      this.setState({ searchTerm: event.target.value }, () => {
        this.doSearch();
      });
    }, _temp;
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', {
        style: styles.searchInput,
        type: 'search',
        placeholder: 'Enter Search',
        value: this.state.searchTerm,
        onChange: this.handleSearch
      })
    );
  }
}

const mapStateToProps = state => {
  const { searchBar } = state;
  return {
    searchBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchTerm: searchTerm => {
      return dispatch(_searchBar.searchBarActions.setSearchTerm(searchTerm));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchBar);