export default function postList(
  state = {
    loading: true
  },
  action
) {
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
        posts: action.data.posts,
        users: action.data.users
      }
    case 'POST_LIST_FAILURE':
      return {
        ...state,
        success: false,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}