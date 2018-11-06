export const postList = (
  state = {
    loading: true
  },
  action
) => {
  switch (action.type) {
    case 'SET_POST_LIST':
      return {
        ...state,
        posts: action.data.posts,
        users: action.data.users,
        loading: false,
        success: true,
      }
    case 'FETCHING_POST_LIST':
      return {
        ...state,
        loading: true
      }
    case 'POST_LIST_SUCCESS':
      return {
        ...state,
        success: true,
        loading: false,
        posts: action.payload.data.posts,
        users: action.payload.data.users
      }
    case 'POST_LIST_FAILURE':
      return {
        ...state,
        success: false,
        loading: false
      }
    default:
      return state
  }
}