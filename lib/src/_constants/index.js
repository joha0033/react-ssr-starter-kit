import { makeActionCreator } from '../_utility'

const FETCHING_POST_LIST = 'FETCHING_POST_LIST'
const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
const POST_LIST_FAILURE = 'POST_LIST_FAILURE'
const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export const fetchingPosts = makeActionCreator(FETCHING_POST_LIST)
export const postFetchSuccess = makeActionCreator(POST_LIST_SUCCESS, 'data')
export const postFetchFailure = makeActionCreator(POST_LIST_FAILURE, 'error')
export const setSearchTerm = makeActionCreator(SET_SEARCH_TERM, 'searchTerm')