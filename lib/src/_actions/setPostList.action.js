import { makeActionCreator } from '../_utility'
export const SET_POST_LIST = 'SET_POST_LIST'
export const setPostListAction = makeActionCreator(SET_POST_LIST, 'data')