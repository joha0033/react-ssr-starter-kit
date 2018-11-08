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
        dispatch(postFetchSuccess(data))
        return data
      }, (error) => {
        dispatch(postFetchFailure(error))
      }).then((data) => {
        return data // array to object??
      })
  }
}
export const postListActions = {
  fetchPosts
}