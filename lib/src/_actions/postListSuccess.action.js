import { makeActionCreator } from '../_utility'
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
export const postListSuccess = makeActionCreator(POST_LIST_SUCCESS, 'data')