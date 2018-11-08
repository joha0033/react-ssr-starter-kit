import { makeActionCreator } from '../_utility'
export const GET_POST_LIST = 'GET_POST_LIST'
export const getPostListAction = makeActionCreator(GET_POST_LIST, 'data')