export const postList = (
  state = {
    loading: true
  },
  action
) => {
  switch (action.type) {
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