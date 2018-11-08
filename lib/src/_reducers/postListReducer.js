// export const postList = (
//   state = {loading: true},
//   action
// ) => {
//   switch (action.type) {
//     case 'GET_POST_LIST':
//       return {
//         ...state,
//         posts: action.data.posts,
//         users: action.data.users,
//         loading: true
//       }
//     case 'SET_POST_LIST':
//       return {
//         ...state,
//         loading: false
//       }
//     case 'POST_LIST_SUCCESS':
//       return {
//         ...state,
//         success: true,
//       }
//     case 'POST_LIST_FAILURE':
//       return {
//         ...state,
//         success: false,
//         loading: false
//       }
//     default:
//       return state
//   }
// }