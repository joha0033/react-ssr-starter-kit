import { postListService } from '../_services/postList.service'
const fetchingPosts = () => ({
  type: 'FETCHING_POST_LIST',
  payload: {
    loading: true
  }
})
const postFetchSuccess = (data) => {
  return {
    type: 'POST_LIST_SUCCESS',
    payload: {
      loading: false,
      success: true,
      data
    }
  }
}
const postFetchFailure = (error) => ({
  type: 'POST_LIST_FAILURE',
  payload: error
})

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchingPosts())
        
    postListService.fetchPosts()
      .then((data) => {
        if(data) return dispatch(postFetchSuccess(data))
      }).catch((err) => dispatch(postFetchFailure(err)))
  }
}
export const postListActions = {
  fetchPosts
}