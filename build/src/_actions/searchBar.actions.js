'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const updateSearchTerm = searchTerm => ({
  type: 'SET_SEARCH_TERM',
  payload: searchTerm
});

const setSearchTerm = searchTerm => dispatch => dispatch(updateSearchTerm(searchTerm));

const searchBarActions = exports.searchBarActions = {
  setSearchTerm
};